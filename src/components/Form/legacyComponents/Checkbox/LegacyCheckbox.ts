import { Components } from 'react-formio';
import { addUniqClasses } from 'utils';

import { withLegacyComponent } from 'components/Form/components/WithLegacyComponent/WithLegacyComponent';
import { ComponentsConfig, FormioComponentName } from '../../types';
import { COMPONENT_CLASSES } from '../../constants';

const Checkbox = (Components as ComponentsConfig).components.checkbox;

export default class CheckboxLegacy extends withLegacyComponent(Checkbox) {
  static schema() {
    return Checkbox.schema({
      type: [FormioComponentName.checkboxLegacy],
      key: 'checkboxLegacy',
    });
  }

  static get builderInfo() {
    return {
      ...Checkbox.builderInfo,
      schema: CheckboxLegacy.schema(),
    };
  }

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.bootstrapComponent, this.component.customClass);
  }
}
