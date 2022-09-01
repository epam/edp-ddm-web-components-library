import React from 'react';
import { ReactComponent } from 'react-formio';
import get from 'lodash/get';
import { addUniqClasses } from 'utils';

import CommonFormioComponent from '../CommonFormioComponent';
import { FormComponent, FormioComponentName } from '../../types';

import settingsForm from './CustomCheckboxSettings';
import CheckboxAdapter from './CheckboxAdapter';
import { COMPONENT_CLASSES, I18N_SEPARATOR } from '../../constants';

class CustomCheckbox extends CommonFormioComponent {
  static get builderInfo() {
    return {
      title: 'Checkbox',
      icon: 'th-list',
      group: 'basic',
      documentation: '',
      weight: 70,
      schema: CustomCheckbox.schema(),
    };
  }

  static schema() {
    return ReactComponent.schema({
      type: FormioComponentName.checkbox,
      inputType: 'checkbox',
      label: 'Checkbox',
      key: 'checkbox',
      dataGridLabel: true,
      labelPosition: 'right',
      value: '',
      name: '',
    });
  }

  static editForm = settingsForm;

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.checkbox, this.component.customClass);
  }

  get componentDefinition() {
    return this.component as FormComponent;
  }

  // eslint-disable-next-line class-methods-use-this
  get labelInfo() {
    return {
      hidden: true,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  getValueAsString(value: boolean) {
    return value
      ? this.i18next.t(`customFormioComponents${I18N_SEPARATOR}checkbox${I18N_SEPARATOR}optionTrue`)
      : this.i18next.t(`customFormioComponents${I18N_SEPARATOR}checkbox${I18N_SEPARATOR}optionFalse`);
  }

  // eslint-disable-next-line class-methods-use-this
  get emptyValue() {
    return false;
  }

  get defaultValue() {
    const { name } = this.component;
    const defaultValue = this.getDefaultValue(this.component.defaultValue);

    return name
      ? (this.component[name] || this.emptyValue)
      : (defaultValue || false).toString() === 'true';
  }

  getDefaultValue(defaultValue: unknown) {
    if (this.component.customDefaultValue && !this.options.preview) {
      return this.evaluate(
        this.component.customDefaultValue,
        { value: '' },
        'value',
      );
    }
    return defaultValue;
  }

  setValue = (value: unknown) => {
    if (value !== undefined && (this.visible || !this.component.clearOnHide)) {
      const changed = this.updateValue(value);
      this.refresh();
      return changed;
    }
    return false;
  };

  renderReact = () => {
    return (
      <CheckboxAdapter
        theme={this.root.options.theme}
        ref={(ref: HTMLElement) => this.initReactInstance(ref)}
        component={this.componentDefinition}
        name={get(this, 'info.attr.name')}
        value={!!this.dataValue}
        onChange={this.updateValue}
        error={this.error}
        disabled={this.disabled}
      />
    );
  };
}

export default CustomCheckbox;
