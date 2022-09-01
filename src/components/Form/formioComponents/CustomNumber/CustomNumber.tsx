import React from 'react';
import { ReactComponent } from 'react-formio';
import get from 'lodash/get';
import { addUniqClasses } from 'utils';

import { FormioComponentName, NumberComponent } from 'components/Form/types';
import CommonFormioComponent from '../CommonFormioComponent';
import NumberAdapter from './NumberAdapter';
import settingsForm from './CustomNumberSettings';
import { COMPONENT_CLASSES, DECIMAL_SEPARATOR } from '../../constants';

class CustomNumber extends CommonFormioComponent {
  static schema() {
    return ReactComponent.schema({
      label: 'Number',
      key: 'number',
      type: FormioComponentName.number,
      mask: false,
      inputType: 'number',
      inputFormat: 'plain',
      tableView: true,
      spellcheck: true,
      truncateMultipleSpaces: false,
      validate: {
        min: '',
        max: '',
        step: 'any',
        integer: '',
        minLength: '',
        maxLength: '',
        pattern: '',
      },
    });
  }

  static get builderInfo() {
    return {
      title: 'Number',
      icon: 'hashtag',
      group: 'basic',
      documentation: '/userguide/#number',
      weight: 0,
      schema: CustomNumber.schema(),
    };
  }

  static editForm = settingsForm;

  get componentDefinition() {
    return this.component as NumberComponent;
  }

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.number, this.component.customClass);
  }

  init = () => {
    this.validators = this.validators.concat(['min', 'max']);
    return super.init();
  };

  // eslint-disable-next-line class-methods-use-this
  get emptyValue() {
    return '';
  }

  getValueAsString = (value: number | string) => {
    const { delimiter, decimalLimit, requireDecimal } = this.componentDefinition;

    return value.toLocaleString('uk-UA', {
      useGrouping: delimiter,
      maximumFractionDigits: decimalLimit,
      minimumFractionDigits: requireDecimal ? decimalLimit : undefined,
    });
  };

  renderReact = () => {
    return (
      <NumberAdapter
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

export default CustomNumber;
