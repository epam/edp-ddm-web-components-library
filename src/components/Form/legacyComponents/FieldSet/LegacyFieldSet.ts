import { Components } from 'react-formio';
import { addUniqClasses, modifySelectRowData } from 'utils';
import { ComponentsConfig, FormioComponentName } from '../../types';
import { COMPONENT_CLASSES } from '../../constants';

const FieldSet = (Components as ComponentsConfig).components.fieldset;

export default class FieldSetLegacy extends FieldSet {
  static schema() {
    return FieldSet.schema({
      type: FormioComponentName.fieldsetLegacy,
      key: 'fieldsetLegacy',
    });
  }

  static get builderInfo() {
    return {
      ...FieldSet.builderInfo,
      schema: FieldSetLegacy.schema(),
    };
  }

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.bootstrapComponent, this.component.customClass);
  }

  checkCondition(row: Record<string, unknown>, data: Record<string, unknown>) {
    return super.checkCondition(modifySelectRowData(this.component, this.root, row), data);
  }
}
