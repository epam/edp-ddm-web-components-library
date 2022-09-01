import { Components } from 'react-formio';

import { addUniqClasses } from 'utils';
import { withLegacyComponent } from 'components/Form/components/WithLegacyComponent/WithLegacyComponent';

import { ComponentsConfig, FormioComponentName } from '../../types';
import { COMPONENT_CLASSES } from '../../constants';

const TextField = (Components as ComponentsConfig).components.textfield;

export default class TextFieldLegacy extends withLegacyComponent(TextField) {
  static schema() {
    return TextField.schema({
      type: FormioComponentName.textfieldLegacy,
      key: 'textfieldLegacy',
    });
  }

  static get builderInfo() {
    return {
      ...TextField.builderInfo,
      schema: TextFieldLegacy.schema(),
    };
  }

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.bootstrapComponent, this.component.customClass);
  }
}
