import { Components } from 'react-formio';

import { withLegacyComponent } from 'components/Form/components/WithLegacyComponent/WithLegacyComponent';
import { addUniqClasses } from 'utils';

import { ComponentsConfig, FormioComponentName } from '../../types';
import { COMPONENT_CLASSES } from '../../constants';

const TextArea = (Components as ComponentsConfig).components.textarea;

export default class TextAreaLegacy extends withLegacyComponent(TextArea) {
  static schema() {
    return TextArea.schema({
      type: FormioComponentName.textareaLegacy,
      key: 'textareaLegacy',
    });
  }

  static get builderInfo() {
    return {
      ...TextArea.builderInfo,
      schema: TextAreaLegacy.schema(),
    };
  }

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.bootstrapComponent, this.component.customClass);
  }
}
