import { ReactComponent } from 'react-formio';
import get from 'lodash/get';
import React from 'react';
import { addUniqClasses } from 'utils';

import { FormComponent, FormioComponentName } from 'components/Form/types';
import CommonFormioComponent from '../CommonFormioComponent';
import EmailAdapter from './EmailAdapter';
import settingsForm from './CustomEmailSettings';
import { COMPONENT_CLASSES } from '../../constants';

class CustomEmail extends CommonFormioComponent {
  static schema() {
    return ReactComponent.schema({
      type: FormioComponentName.email,
      label: 'Email',
      key: 'email',
      inputType: 'email',
      kickbox: {
        enabled: false,
      },
    });
  }

  static get builderInfo() {
    return {
      title: 'Email',
      group: 'advanced',
      icon: 'at',
      documentation: '/userguide/#email',
      weight: 10,
      schema: CustomEmail.schema(),
    };
  }

  static editForm = settingsForm;

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.email, this.component.customClass);
  }

  init = () => {
    this.validators.push('email');
    return super.init();
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
      <EmailAdapter
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

export default CustomEmail;
