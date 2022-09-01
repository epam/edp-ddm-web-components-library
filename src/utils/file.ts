import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import mapValues from 'lodash/mapValues';
import flatten from 'lodash/flatten';
import values from 'lodash/values';
import flatMap from 'lodash/flatMap';
import get from 'lodash/get';
import type {
  FileFullResponse,
  FileShortResponse,
  Form,
  FileMetadata,
  TaskData,
} from 'components/Form/types';
import { isFileComponent } from 'components/Form/utils';

export function getFormFileKeys(form: Form): string[] {
  return form.components
    .filter((component) => isFileComponent(component.type))
    .map((component) => component.key)
    .concat(flatMap(form.components
      .filter((component) => !!get(component, 'components')),
    (component) => getFormFileKeys(component as unknown as Form)));
}

export function findDataByKey(
  data: TaskData,
  key: string,
): Array<{ key: string, data: unknown }> {
  if (isObject(data[key])) {
    return [{ key, data: data[key] as TaskData }];
  }

  const nestedValues = flatten(
    values(data)
      .filter((value: unknown) => isArray(value)),
  ) as Array<TaskData>;

  return flatten(nestedValues.map((value) => findDataByKey(value, key)));
}

export function getFileIdsWithoutMetadata(
  form: Form,
  data: TaskData<Record<string, Partial<FileFullResponse[] & FileShortResponse[]>>>,
) {
  if (!data) {
    return null;
  }
  const fileKeys = getFormFileKeys(form);

  if (fileKeys.length === 0) {
    return null;
  }

  const allFileFieldsData = flatten(
    fileKeys.map((key) => findDataByKey(data, key)),
  ) as Array<{ key: string, data: Partial<FileFullResponse[] & FileShortResponse[]> }>;

  return allFileFieldsData
    .filter((value) => !value.data[0]?.name && value.data[0]?.id)
    .map((value) => ({
      id: value.data[0]?.id || '',
      fieldName: value.key,
    }));
}

export function fillFilesMetadata(
  metadata: FileMetadata[],
  taskData: TaskData<Record<string, FileShortResponse | unknown>>,
  form: Form,
): TaskData<Record<string, FileFullResponse | unknown | unknown[]> > {
  return mapValues(taskData, (value, key) => {
    const isFileValue = getFormFileKeys(form).includes(key);
    const isEmptyValue = isArray(value) && value.length === 0;

    if (isArray(value) && !isFileValue) {
      return (value as Array<TaskData<Record<string, FileShortResponse | unknown>>>)
        .map((item) => fillFilesMetadata(metadata, item, form));
    }
    if (!isFileValue || isEmptyValue) {
      return value;
    }

    const metadataElement = metadata
      .find((entry) => value && entry.id === (value as FileShortResponse[])[0].id) as FileMetadata;
    if (!metadataElement) {
      return value;
    }

    return [{
      size: metadataElement.size,
      url: metadataElement.url,
      name: metadataElement.name,
      originalName: metadataElement.name,
      data: metadataElement,
    }];
  });
}
