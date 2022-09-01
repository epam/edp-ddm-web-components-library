import get from 'lodash/get';
import { ReactComponent } from 'react-formio';
import React from 'react';
import { addUniqClasses } from 'utils';

import { FormComponent, FormioComponentName } from 'components/Form/types';

import CommonFormioComponent from '../CommonFormioComponent';
import TextAreaAdapter from './TextAreaAdapter';
import settingsForm from './CustomTextAreaSettings';
import { COMPONENT_CLASSES } from '../../constants';

class CustomTextArea extends CommonFormioComponent {
  static schema() {
    return ReactComponent.schema({
      type: FormioComponentName.textarea,
      label: 'Text Area',
      key: 'textArea',
      rows: 3,
      wysiwyg: false,
      editor: '',
      fixedSize: true,
      inputFormat: 'html',
      validate: {
        minWords: '',
        maxWords: '',
      },
    });
  }

  static get builderInfo() {
    return {
      title: 'Text Area',
      group: 'basic',
      icon: 'font',
      documentation: '/userguide/#textarea',
      weight: 20,
      schema: CustomTextArea.schema(),
    };
  }

  static editForm = settingsForm;

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.textarea, this.component.customClass);
  }

  get componentDefinition() {
    return this.component as FormComponent;
  }

  // eslint-disable-next-line class-methods-use-this
  get emptyValue() {
    return '';
  }

  renderReact = () => {
    return (
      <TextAreaAdapter
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

export default CustomTextArea;
