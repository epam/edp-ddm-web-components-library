/* eslint-disable */
import { Components } from 'react-formio';
import isNaN from 'lodash/isNaN';
import get from 'lodash/get';
import { I18N_SEPARATOR } from '../../constants';

const DayComponent = (Components as any).components.day;

export default class CustomDay extends (DayComponent as any) {
  /**
   * Return the date for this component.
   *
   * @param value
   * @return {*}
   */
  getDate(value: string) {
    let defaults = [], day, month, year;
    // Map positions to identifiers to get default values for each part of day
    const [DAY, MONTH, YEAR] = this.component.dayFirst ? [0, 1, 2] : [1, 0, 2];
    const defaultValue = value || this.component.defaultValue;
    if (defaultValue) {
      defaults = defaultValue.split('/').map((x: string) => parseInt(x, 10));
    }

    if (this.showDay && this.refs.day) {
      day = parseInt(this.refs.day.value, 10);
    }
    if (day === undefined || isNaN(day)) {
      day = defaults[DAY] && !isNaN(defaults[DAY]) ? defaults[DAY] : 0;
    }

    if (this.showMonth && this.refs.month) {
      // Months are 0 indexed.
      month = parseInt(this.refs.month.value, 10);
    }
    if (month === undefined || isNaN(month)) {
      month = defaults[MONTH] && !isNaN(defaults[MONTH]) ? defaults[MONTH] : 0;
    }

    if (this.showYear && this.refs.year) {
      year = parseInt(this.refs.year.value);
    }
    if (year === undefined || isNaN(year)) {
      year = defaults[YEAR] && !isNaN(defaults[YEAR]) ? defaults[YEAR] : 0;
    }

    let result;
    if (!day && !month && !year) {
      // NEXT LINE IS DIFFERENT FROM FORM.IO SOURCE
      return this.emptyValue;
    }

    // add trailing zeros if the data is showed
    day = this.showDay ? day.toString().padStart(2, '0') : '';
    month = this.showMonth ? month.toString().padStart(2, '0') : '';
    year = this.showYear ? year.toString().padStart(4, '0') : '';

    if (this.component.dayFirst) {
      result = `${day}${this.showDay && this.showMonth || this.showDay && this.showYear ? '/' : ''}${month}${this.showMonth && this.showYear ? '/' : ''}${year}`;
    }
    else {
      result = `${month}${this.showDay && this.showMonth || this.showMonth && this.showYear ? '/' : ''}${day}${this.showDay && this.showYear ? '/' : ''}${year}`;
    }

    return result;
  }

  // NEXT FUNCTION IS DIFFERENT FROM FORM.IO SOURCE
  get months() {
    if (this._months) {
      return this._months;
    }
    this._months = [
      {
        value: '',
        label: get(this.component, 'fields.month.placeholder') || (this.hideInputLabels ? this.t('Month') : '')
      },
      { value: 1, label: this.t(`customFormioComponents${I18N_SEPARATOR}day${I18N_SEPARATOR}january`) },
      { value: 2, label: this.t(`customFormioComponents${I18N_SEPARATOR}day${I18N_SEPARATOR}february`) },
      { value: 3, label: this.t(`customFormioComponents${I18N_SEPARATOR}day${I18N_SEPARATOR}march`) },
      { value: 4, label: this.t(`customFormioComponents${I18N_SEPARATOR}day${I18N_SEPARATOR}april`) },
      { value: 5, label: this.t(`customFormioComponents${I18N_SEPARATOR}day${I18N_SEPARATOR}may`) },
      { value: 6, label: this.t(`customFormioComponents${I18N_SEPARATOR}day${I18N_SEPARATOR}june`) },
      { value: 7, label: this.t(`customFormioComponents${I18N_SEPARATOR}day${I18N_SEPARATOR}july`) },
      { value: 8, label: this.t(`customFormioComponents${I18N_SEPARATOR}day${I18N_SEPARATOR}august`) },
      { value: 9, label: this.t(`customFormioComponents${I18N_SEPARATOR}day${I18N_SEPARATOR}september`) },
      { value: 10, label: this.t(`customFormioComponents${I18N_SEPARATOR}day${I18N_SEPARATOR}october`) },
      { value: 11, label: this.t(`customFormioComponents${I18N_SEPARATOR}day${I18N_SEPARATOR}november`) },
      { value: 12, label: this.t(`customFormioComponents${I18N_SEPARATOR}day${I18N_SEPARATOR}december`) }
    ];
    return this._months;
  }
}
