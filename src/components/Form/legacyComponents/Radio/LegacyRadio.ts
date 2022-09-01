import { Components } from 'react-formio';

import { withLegacyComponent } from 'components/Form/components/WithLegacyComponent/WithLegacyComponent';
import { addUniqClasses } from 'utils';

import { ComponentsConfig, FormioComponentName } from '../../types';
import { COMPONENT_CLASSES } from '../../constants';

const Radio = (Components as ComponentsConfig).components.radio;

export default class RadioLegacy extends withLegacyComponent(Radio) {
  getValueAsString = (value: unknown) => {
    const normilizedValue = value === false ? value.toString() : value;
    return super.getValueAsString(normilizedValue);
  };

  static schema() {
    return Radio.schema({
      type: FormioComponentName.radioLegacy,
      key: 'radioLegacy',
    });
  }

  static get builderInfo() {
    return {
      ...Radio.builderInfo,
      schema: RadioLegacy.schema(),
    };
  }

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.bootstrapComponent, this.component.customClass);
  }
}
