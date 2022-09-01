// eslint-disable-next-line max-classes-per-file
import cloneDeep from 'lodash/cloneDeep';
import get from 'lodash/get';
import mapValues from 'lodash/mapValues';
import isArray from 'lodash/isArray';
import isNumber from 'lodash/isNumber';
import flatMapDeep from 'lodash/flatMapDeep';
import clsx, { ClassValue } from 'clsx';

import { formatDateTimeToISO, getDateFromDateTime } from 'utils/dateTime';
import { pick } from 'lodash';
import { Formio } from 'formiojs';
import {
  ButtonComponent,
  FileComponent,
  FileFullResponse,
  FileShortResponse,
  FormComponent,
  FormSubmission,
  SelectComponent,
} from './types';
import { THOUSANDS_SEPARATOR, DECIMAL_SEPARATOR } from './constants';

export const isFileComponent = (type: string): boolean => (
  type === 'file' || type === 'fileLatest' || type === 'fileLegacy'
);

// added to counter formio's internal cache which is impossible to disable
export const disableComponentDataCache = (component: FormComponent) => {
  const noCacheQueryParam = `noCache=${Date.now()}`;

  return {
    ...component,
    filter: component.filter ? `${component.filter}&${noCacheQueryParam}` : noCacheQueryParam,
  } as FormComponent;
};

export const sanitizeComponent = (component: FormComponent) => {
  const result = { ...component };
  // TODO: id field breaks form renderer for unknown reasons. Figure out why
  delete result.id;

  return result as FormComponent;
};

export const allowLocalDevFileUpload = (component: FormComponent) => {
  if (process.env.NODE_ENV !== 'production' && isFileComponent(component.type)) {
    const fileComponent = component as FileComponent;
    return {
      ...fileComponent,
      url: fileComponent.url?.startsWith('/') ? Formio.getBaseUrl().concat(fileComponent.url) : fileComponent.url,
      options: {
        ...(fileComponent.options && { ...fileComponent.options }),
        withCredentials: 'include',
      },
    };
  }
  return component;
};

const convertDateFromFormIOFormat = (dateTime: string, dayFirst: boolean) => {
  const date = dateTime.split('/');
  const year = date[2];
  const month = date[dayFirst ? 1 : 0];
  const day = date[dayFirst ? 0 : 1];

  if (day === '00' && year === '0000' && month === '00') {
    return null;
  }

  return `${year}-${month}-${day}`;
};

export const formatDateComponentDateTime = (dateTime: string, withoutTime: boolean) => {
  if (withoutTime) {
    return getDateFromDateTime(dateTime);
  }
  return formatDateTimeToISO(dateTime);
};

const formatFileResponse = (file: FileFullResponse[]): FileShortResponse[] => {
  const fieldsToSave: Array<keyof FileShortResponse> = ['id', 'checksum'];
  return isArray(file)
    ? file.map((el) => pick(el.data, fieldsToSave))
    : [];
};

const convertDateToFormIOFormat = (dateTime: string, dayFirst: boolean) => {
  const date = dateTime.split('-');
  const year = date[0];
  const month = date[1];
  const day = date[2];
  if (dayFirst) {
    return `${day}/${month}/${year}`;
  }
  return `${month}/${day}/${year}`;
};

const convertSubmissionData = (
  components: Array<FormComponent>,
  data: Record<string, unknown>,
  converter: (value: unknown, component: FormComponent) => unknown,
): Record<string, unknown> => {
  return mapValues(data, (value, key) => {
    const componentDefinition = components.find((component) => component.key === key);
    const nestedComponents = get(componentDefinition, 'components', []) as Array<FormComponent>;

    if (componentDefinition) {
      if (nestedComponents?.length && isArray(value)) {
        return value.map((nestedValue) => convertSubmissionData(nestedComponents, nestedValue, converter));
      }

      return converter(value, componentDefinition);
    }

    return value;
  });
};

export const convertSubmission = (
  components: Array<FormComponent>,
  formSubmission: FormSubmission = { data: {} },
  converter: (value: unknown, component: FormComponent) => unknown,
): FormSubmission => {
  return {
    ...formSubmission,
    data: convertSubmissionData(components, formSubmission.data, converter),
  };
};

export const prepareSubmissions = (
  components: Array<FormComponent>,
  formSubmission: FormSubmission | undefined,
  isFormData?: boolean,
) => {
  let submission = cloneDeep(formSubmission);

  if (!submission) {
    return submission;
  }

  submission = convertSubmission(components, submission, (value, component) => {
    if (component.type === 'day' && value) {
      const date = value as string;
      const dayFirst = get(component, 'dayFirst', false);
      const formatDate = isFormData ? convertDateFromFormIOFormat : convertDateToFormIOFormat;

      return formatDate(date, dayFirst);
    }

    return value;
  });

  // TODO: To be changed after 'Latest' components are removed: remove this for Latest version of DateTime
  submission = convertSubmission(components, submission, (value, component) => {
    if (component.type === 'datetime' && value) {
      const dateTime = value as string;
      return formatDateComponentDateTime(dateTime, !component.enableTime);
    }

    return value;
  });

  submission = convertSubmission(components, submission, (value, component) => {
    if (isFileComponent(component?.type) && !value) {
      return [];
    }

    return value;
  });

  return submission;
};

export function prepareFileSubmission(
  components: Array<FormComponent>,
  formSubmission: FormSubmission,
): FormSubmission {
  const submission = cloneDeep(formSubmission);

  return convertSubmission(components, submission, (value, component) => {
    if (isFileComponent(component?.type) && value) {
      const fileFullResponse = value as FileFullResponse[];
      return formatFileResponse(fileFullResponse);
    }
    return value;
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const changeComponentKey = (Component: any, newKey: string) => class FormioClass extends Component {
  static schema() {
    return {
      ...Component.schema(),
      type: newKey,
      key: newKey,
    };
  }

  static get builderInfo() {
    return {
      ...Component.builderInfo,
      schema: {
        ...Component.schema(),
        type: newKey,
        key: newKey,
      },
    };
  }
} as typeof Component;
export const addUniqClasses = (...args: ClassValue[]) => {
  const newClasses = clsx(...args);
  return [...Array.from(new Set(newClasses.split(' ')))].join(' ');
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addComponentClass = (Component: any, customClass: string) => class FormioClass extends Component {
  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(
      customClass,
      this.component.customClass,
    );
  }
} as typeof Component;

export function ignoreBuilderFields(keys: Array<string>): Array<{ ignore: boolean, key: string }> {
  return keys.map((key) => ({ key, ignore: true }));
}

export function numberToString(value: unknown) {
  return isNumber(value) ? value.toString() : value;
}

export function modifySelectRowData(
  component: FormComponent,
  root: { form: { components: FormComponent[] }, options: { parentPath?: string } },
  row: Record<string, unknown>,
) {
  // TODO: To be changed after 'Latest' components are removed
  const selectTypes = ['select', 'selectLegacy', 'selectLatest', 'selectPreview'];
  const { conditional } = component;
  const key = conditional?.when;
  let resultRow = { ...row };
  if (!key || !root) {
    return resultRow;
  }

  const { form: { components }, options: { parentPath } } = root;

  const selectComponent = components.find((c: FormComponent) => c.key === key) as SelectComponent;

  if (selectComponent && selectTypes.includes(selectComponent.type)) {
    const path = `${key}.${selectComponent.valueProperty || 'value'}`;
    resultRow = { ...resultRow, [key]: get(row, path) };
  }

  if (parentPath) {
    resultRow = { ...resultRow, [parentPath]: resultRow };
  }

  return resultRow;
}

export const editForm = (key: string, components: Record<string, unknown>[]) => ({
  key,
  components,
});

export const parseValueToNumber = (inputValue: string) => {
  if (!inputValue) {
    return null;
  }
  const inputValueReplaced = inputValue.replace(DECIMAL_SEPARATOR, '.');
  return parseFloat(inputValueReplaced.split(THOUSANDS_SEPARATOR).join(''));
};

export const isNavigationButton = (action: string): boolean => action === 'navigation';

export const findNavigationButtons = (components: FormComponent[]): ButtonComponent[] => {
  return flatMapDeep(
    components,
    (component: FormComponent) => {
      if (isNavigationButton((component as ButtonComponent).action)) {
        return component;
      }

      if ('columns' in component) {
        return flatMapDeep(
          component.columns,
          (column: { components: FormComponent[]; }) => {
            return column.components.map((columnComponent: FormComponent) => {
              if (isNavigationButton((columnComponent as ButtonComponent).action)) {
                return columnComponent;
              }

              if ('columns' in columnComponent) {
                return findNavigationButtons([columnComponent]);
              }

              const nestedColumnComponents = get(columnComponent, 'components', []);
              if (nestedColumnComponents.length) {
                return findNavigationButtons(nestedColumnComponents);
              }

              return [];
            });
          },
        );
      }

      const nestedComponents = get(component, 'components', []);
      if (nestedComponents.length) {
        return findNavigationButtons(nestedComponents);
      }

      return [];
    },
  ) as unknown as ButtonComponent[];
};

export function transformTextCase(
  value: string | number | null,
  textCase: 'mixed' | 'uppercase' | 'lowercase',
) {
  if (!value) {
    return value;
  }
  if (!textCase || textCase === 'mixed') {
    return value.toString();
  }
  if (textCase === 'uppercase') {
    return value.toString().toUpperCase();
  }
  return value.toString().toLowerCase();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getComponentPath(component: any, path = ''): string {
  const parentPath = component.options.parentPath || '';
  const key = `${parentPath}${parentPath ? '.' : ''}${component.key}`;

  if (!component || !component.key || component?._form?.display === 'wizard') {
    return path;
  }
  path = component.isInputComponent || component.input === true ? `${key}${path ? '.' : ''}${path}` : path;

  return getComponentPath(component.parent, path);
}

export function checkRefresh(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  this: any,
  refreshData: string,
  changed: Record<string, unknown>,
  flags: Record<string, unknown>,
) {
  // This method is a slight rework of formio's method in Component.js of the same name
  // Made to take options.parentPath into account.
  const changePath = get(changed, 'instance.path', false);
  const refreshableChange = (changePath && getComponentPath(changed.instance) === refreshData)
    && changed && changed.instance &&
    // Make sure the changed component is not in a different "context". Solves issues where refreshOn being set
    // in fields inside EditGrids could alter their state from other rows (which is bad).
    this.inContext(changed.instance);

  // Don't let components change themselves.
  if (changePath && this.path === changePath) {
    return;
  }

  if (refreshData === 'data') {
    this.refresh(this.data, changed, flags);
  } else if (refreshableChange) {
    this.refresh(changed.value, changed, flags);
  }
}
