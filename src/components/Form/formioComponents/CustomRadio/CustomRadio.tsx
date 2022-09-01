import { ReactComponent } from 'react-formio';
import get from 'lodash/get';
import find from 'lodash/find';
import React from 'react';
import { addUniqClasses } from 'utils';

import { FormComponent, FormioComponentName } from 'components/Form/types';
import CommonFormioComponent from '../CommonFormioComponent';
import RadioAdapter from './RadioAdapter';
import settingsForm from './CustomRadioSettings';
import { COMPONENT_CLASSES } from '../../constants';

class CustomRadio extends CommonFormioComponent {
  static get builderInfo() {
    return {
      title: 'Radio',
      icon: 'dot-circle-o',
      group: 'basic',
      documentation: '',
      weight: 80,
      schema: CustomRadio.schema(),
    };
  }

  static schema() {
    return ReactComponent.schema({
      type: FormioComponentName.radio,
      inputType: 'radio',
      label: 'Radio',
      key: 'radio',
      values: [{ label: '', value: '' }],
      validate: {
        onlyAvailableItems: false,
      },
      fieldSet: false,
    });
  }

  static editForm = settingsForm;

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.radio, this.component.customClass);
  }

  getValueAsString = (value?: string | boolean) => {
    if (value === null || value === undefined) {
      return '';
    }
    const normalizedValue = String(value);
    const option = find(this.component.values, (v) => v.value === normalizedValue);

    return get(option, 'label', '');
  };

  get componentDefinition() {
    return this.component as FormComponent;
  }

  // eslint-disable-next-line class-methods-use-this
  get emptyValue() {
    return '';
  }

  renderReact = () => {
    return (
      <RadioAdapter
        theme={this.root.options.theme}
        ref={(ref: HTMLElement) => this.initReactInstance(ref)}
        component={this.componentDefinition}
        name={get(this, 'info.attr.name')}
        value={this.dataValue}
        onChange={this.updateValue}
        error={this.error}
        disabled={this.disabled}
      />
    );
  };
}

export default CustomRadio;
