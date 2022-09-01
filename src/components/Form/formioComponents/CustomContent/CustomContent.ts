import { Components } from 'react-formio';
import { Templates } from 'formiojs';
import { addUniqClasses } from 'utils';
import settingsForm from './CustomContentSettings';
import './styles.scss';
import { COMPONENT_CLASSES } from '../../constants';
import { modifySelectRowData } from '../../utils';

type ContentContext = {
  instance: {
    id: string;
  },
  component: {
    hideContentLabel?: boolean;
    label: string;
    key: string;
    hideLabel: boolean;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ContentComponent = (Components as any).components.content;

const contentTemplate = Templates.current.html.form;
const contentLabelTemplate = (instanceId: string, key: string, label: string) => {
  return `<label class="col-form-label" for="${instanceId}-${key}">${label}</label>`;
};

Templates.current = {
  html: {
    form: (ctx: ContentContext) => {
      const { component, instance } = ctx;
      const hideLabel = component.hideContentLabel === undefined ? component.hideLabel : component.hideContentLabel;

      return (hideLabel
        ? ''
        : contentLabelTemplate(instance.id, component.key, component.label)) + contentTemplate(ctx);
    },
  },
};

export default class CustomContent extends ContentComponent {
  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(
      this.component.customClass,
      COMPONENT_CLASSES.content,
      COMPONENT_CLASSES.bootstrapComponent,
    );
  }

  checkCondition(row: Record<string, unknown>, data: Record<string, unknown>) {
    return super.checkCondition(modifySelectRowData(this.component, this.root, row), data);
  }

  static editForm = settingsForm;
}
