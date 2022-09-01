import { ReactComponent } from 'react-formio';
import get from 'lodash/get';
import { DateTime } from 'luxon';
import isNumber from 'lodash/isNumber';
import React from 'react';
import { addUniqClasses } from 'utils';

import { DateTimeComponent, FormioComponentName } from 'components/Form/types';

import { isEqual, isNil } from 'lodash';
import CommonFormioComponent from '../CommonFormioComponent';
import DateTimePickerAdapter from './DateTimePickerAdapter';
import settingsForm from './CustomDateTimePickerSettings';
import { COMPONENT_CLASSES, I18N_SEPARATOR } from '../../constants';

class CustomDateTimePicker extends CommonFormioComponent {
  static schema() {
    return ReactComponent.schema({
      label: 'Date / Time',
      key: 'dateTime',
      type: FormioComponentName.datetime,
      format: 'yyyy-MM-dd hh:mm a',
      useLocaleSettings: false,
      allowInput: true,
      enableDate: true,
      enableTime: true,
      defaultValue: '',
      defaultDate: '',
      displayInTimezone: 'viewer',
      timezone: '',
      datepickerMode: 'day',
      datePicker: {
        showWeeks: true,
        startingDay: 0,
        initDate: '',
        minMode: 'day',
        maxMode: 'year',
        yearRows: 4,
        yearColumns: 5,
        minDate: null,
        maxDate: null,
      },
      timePicker: {
        hourStep: 1,
        minuteStep: 1,
        showMeridian: true,
        readonlyInput: false,
        mousewheel: true,
        arrowkeys: true,
      },
      customOptions: {},
    });
  }

  static get builderInfo() {
    return {
      title: 'Date / Time',
      icon: 'calendar',
      group: 'advanced',
      documentation: '/userguide/#datetime',
      weight: 40,
      schema: CustomDateTimePicker.schema(),
    };
  }

  static editForm = settingsForm;

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.datetime, this.component.customClass);
  }

  get componentDefinition() {
    return this.component as DateTimeComponent;
  }

  // eslint-disable-next-line class-methods-use-this
  get emptyValue() {
    return '';
  }

  checkDateDisabled = (date?: string) => {
    let isValid = true;
    const dateObj = date ? DateTime.fromISO(date).toJSDate() : null;
    const dayNumber = dateObj?.getDay() as number;
    const component = this.componentDefinition;
    const maxDate = component.datePicker?.maxDate;
    const minDate = component.datePicker?.minDate;

    if (component.datePicker?.disableFunction) {
      isValid = !this.evaluate(`return ${component.datePicker.disableFunction}`, {
        date: dateObj,
      });
    }

    if (component.datePicker?.disableWeekdays) {
      const hasWeekdays = isNumber(dayNumber) && (dayNumber > 0 && dayNumber < 6);
      isValid = hasWeekdays ? false : isValid;
    }

    if (component.datePicker?.disableWeekends) {
      const hasWeekends = isNumber(dayNumber) && (dayNumber === 0 || dayNumber === 6);
      isValid = hasWeekends ? false : isValid;
    }

    if (date && maxDate) {
      const isOverLimit = DateTime.fromISO(maxDate).startOf('day') < DateTime.fromISO(date).startOf('day');
      isValid = isOverLimit ? false : isValid;
    }

    if (date && minDate) {
      const isUnderLimit = DateTime.fromISO(minDate).startOf('day') > DateTime.fromISO(date).startOf('day');
      isValid = isUnderLimit ? false : isValid;
    }

    return isValid;
  };

  /*
    this method allows manual override of Calculated Value
    from formio.js v.4.14.1 source: src/components/_classes/component/Component.js
  */
  doValueCalculation(dataValue: unknown, data: unknown, row: unknown, flags: Record<string, unknown>) {
    // If data was calculated in a submission and the editing mode is on, skip calculating
    if (!flags.fromSubmission || !this.component.persistent) {
      return this.evaluate(this.component.calculateValue, {
        value: dataValue,
        data,
        row: row || this.data,
      }, 'value');
    }

    return dataValue;
  }

  /*
    this method allows manual override of Calculated Value
    from formio.js v.4.14.1 source: src/components/_classes/component/Component.js
  */
  calculateComponentValue(data: unknown, flags: Record<string, unknown>, row: unknown) {
    // If no calculated value or
    // hidden and set to clearOnHide (Don't calculate a value for a hidden field set to clear when hidden)
    const { hidden, clearOnHide } = this.component;
    const shouldBeCleared = (!this.visible || hidden) && clearOnHide && !this.rootPristine;

    // Handle all cases when calculated values should not fire.
    if (
      (this.options.readOnly && !this.options.pdf)
      || !(this.component.calculateValue || this.component.calculateValueVariable)
      || shouldBeCleared
      || (this.options.server && !this.component.calculateServer)
      || flags.dataSourceInitialLoading
    ) {
      return false;
    }

    const { dataValue } = this;
    // Calculate the new value.
    let calculatedValue = this.doValueCalculation(dataValue, data, row, flags);

    if (isNil(calculatedValue)) {
      calculatedValue = this.emptyValue;
    }

    const changed = !isEqual(dataValue, calculatedValue);

    // Do not override calculations on server if they have calculateServer set.
    if (this.component.allowCalculateOverride) {
      const firstPass = (this.calculatedValue === undefined);
      if (firstPass) {
        this.calculatedValue = null;
      }
      const newCalculatedValue = this.normalizeValue(this.convertNumberOrBoolToString(calculatedValue));
      const previousCalculatedValue = this.normalizeValue(this.convertNumberOrBoolToString(this.calculatedValue));
      const calculationChanged = !isEqual(previousCalculatedValue, newCalculatedValue);
      const previousChanged = !isEqual(dataValue, previousCalculatedValue);

      if (calculationChanged && previousChanged && !firstPass) {
        return false;
      }

      // Check to ensure that the calculated value is different than the previously calculated value.
      if (previousCalculatedValue && previousChanged && !calculationChanged) {
        return false;
      }

      if (flags.isReordered || !calculationChanged) {
        return false;
      }

      if (flags.fromSubmission && this.component.persistent === true) {
        // If we set value from submission and it differs from calculated one, set the calculated value to prevent
        // overriding dataValue in the next pass
        this.calculatedValue = calculatedValue;
        return false;
      }

      // If this is the firstPass, and the dataValue is different than to the calculatedValue.
      if (firstPass && !this.isEmpty(dataValue) && changed && calculationChanged) {
        // Return that we have a change so it will perform another pass.
        return true;
      }
    }

    this.calculatedValue = calculatedValue;

    if (changed) {
      // eslint-disable-next-line no-param-reassign
      flags.triggeredComponentId = this.id;
      return this.setValue(calculatedValue, flags);
    }
    return false;
  }

  getValueAsString(value: string | null) {
    const date = DateTime.fromISO(value || '');

    if (!value) {
      return '';
    }

    return date.isValid
      ? date.toFormat(this.component.format)
      : this.t(`customFormioComponents${I18N_SEPARATOR}dateTime${I18N_SEPARATOR}invalidDate`);
  }

  renderReact = () => {
    return (
      <DateTimePickerAdapter
        theme={this.root.options.theme}
        component={this.componentDefinition}
        name={get(this, 'info.attr.name')}
        value={this.dataValue}
        onChange={this.updateValue}
        checkDateDisabled={this.checkDateDisabled}
        error={this.error}
        disabled={this.disabled}
      />
    );
  };
}

export default CustomDateTimePicker;
