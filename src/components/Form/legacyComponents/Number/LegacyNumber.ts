import { Components } from 'react-formio';
import { addUniqClasses, modifySelectRowData } from 'utils';

import { withLegacyComponent } from 'components/Form/components/WithLegacyComponent/WithLegacyComponent';
import { ComponentsConfig, FormioComponentName } from '../../types';
import { COMPONENT_CLASSES } from '../../constants';

const Number = (Components as ComponentsConfig).components.number;

export default class NumberLegacy extends withLegacyComponent(Number) {
  static schema() {
    return Number.schema({
      type: FormioComponentName.numberLegacy,
      key: 'numberLegacy',
    });
  }

  static get builderInfo() {
    return {
      ...Number.builderInfo,
      schema: NumberLegacy.schema(),
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
