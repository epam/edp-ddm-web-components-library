import { ReactComponent } from 'react-formio';
import get from 'lodash/get';
import React from 'react';
import { addUniqClasses } from 'utils';

import { FormComponent, FormioComponentName } from 'components/Form/types';

import CommonFormioComponent from '../CommonFormioComponent';
import TextFieldAdapter from './TextFieldAdapter';
import settingsForm from './CustomTextFieldSettings';
import { COMPONENT_CLASSES } from '../../constants';

class CustomTextField extends CommonFormioComponent {
  static schema() {
    return ReactComponent.schema({
      label: 'Text Field',
      key: 'textField',
      type: FormioComponentName.textfield,
      mask: false,
      inputType: 'text',
      inputFormat: 'plain',
      inputMask: '',
      displayMask: '',
      tableView: true,
      spellcheck: true,
      truncateMultipleSpaces: false,
      validate: {
        minLength: '',
        maxLength: '',
        pattern: '',
      },
    });
  }

  static get builderInfo() {
    return {
      title: 'Text Field',
      icon: 'terminal',
      group: 'basic',
      documentation: '/userguide/#textfield',
      weight: 0,
      schema: CustomTextField.schema(),
    };
  }

  static editForm = settingsForm;

  get componentDefinition() {
    return this.component as FormComponent;
  }

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.textfield, this.component.customClass);
  }

  // eslint-disable-next-line class-methods-use-this
  get emptyValue() {
    return '';
  }

  renderReact = () => {
    return (
      <TextFieldAdapter
        theme={this.root.options.theme}
        component={this.componentDefinition}
        name={get(this, 'info.attr.name')}
        value={this.dataValue}
        onChange={this.updateValue}
        onBlur={this.handleOnBlure}
        error={this.error}
        disabled={this.disabled}
      />
    );
  };
}

export default CustomTextField;
