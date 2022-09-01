/* eslint-disable */
import { Components } from 'react-formio';
import language from 'flatpickr/dist/l10n/uk';
import { isEqual, isNil } from 'lodash';

import { addUniqClasses, modifySelectRowData } from 'utils';
import { withLegacyComponent } from 'components/Form/components/WithLegacyComponent/WithLegacyComponent';
import { FormioComponentName } from 'components/Form/types';

import { COMPONENT_CLASSES } from '../../constants';

const DateTimeComponent = (Components as any).components.datetime;

export default class DateTimeLegacy extends withLegacyComponent(DateTimeComponent) {
  constructor(component: unknown, options: unknown, data: unknown) {
    super(component, options, data);

    this.component.widget = {
      ...this.component.widget,
      locale: language.uk,
    };
    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.bootstrapComponent, this.component.customClass);
  }

  static schema() {
    return DateTimeComponent.schema({
      type: FormioComponentName.datetimeLegacy,
      key: 'datetimeLegacy',
    });
  }

  static get builderInfo() {
    return {
      ...DateTimeComponent.builderInfo,
      schema: DateTimeLegacy.schema(),
    };
  }

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
}
