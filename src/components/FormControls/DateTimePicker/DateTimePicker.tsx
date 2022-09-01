import { WithStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import clsx from 'clsx';
import { DateTime } from 'luxon';

import { FormControlError } from 'types/formControls';

import DateTimePickerInput from './components/DateTimePickerInput';
import styles from './DateTimePicker.styles';
import TimePicker from './components/TimePicker';

import './styles.scss';

export interface DateTimePickerProps {
  value: string | null;
  onChange: (value: string | null) => void;
  id: string;
  name?: string;
  error?: FormControlError;
  label?: string;
  format?: string;
  placeholder?: string;
  disabled?: boolean;
  enableDate?: boolean;
  enableTime?: boolean;
  inputDisabled?: boolean;
  tabIndex?: string;
  description?: string;
  checkDateDisabled?: (date?: string) => boolean;
}

export interface Props extends DateTimePickerProps, WithStyles<typeof styles> {}

registerLocale('uk', uk);

export default class DateTimePicker extends Component<Props> {
  static defaultProps = {
    enableDate: true,
    enableTime: true,
  };

  getStringValue = (value: Date | null) => {
    return value ? DateTime.fromJSDate(value, { zone: 'utc' }).toISO() : null;
  };

  setValue = (newValue: Date | null) => {
    const { onChange, enableDate, enableTime } = this.props;
    if (!newValue) {
      onChange(null);
      return;
    }

    const dateTimeObj = DateTime.fromJSDate(newValue, { zone: 'utc' });
    let dateTime = dateTimeObj.toISO();
    if (enableDate && !enableTime) {
      dateTime = dateTimeObj.toLocal().toISODate();
    }
    if (!enableDate && enableTime) {
      dateTime = dateTimeObj.toISOTime();
    }
    onChange(dateTime);
  };

  filterDate = (value: Date) => {
    const { checkDateDisabled } = this.props;

    return checkDateDisabled
      ? checkDateDisabled(this.getStringValue(value) as string)
      : true;
  };

  render() {
    const {
      value,
      id,
      classes,
      inputDisabled,
      disabled,
      description,
      placeholder,
      name,
      tabIndex,
      format = 'yyyy-MM-dd HH:mm',
      enableDate,
      enableTime,
      error,
    } = this.props;
    const selected = (value && DateTime.fromISO(value).isValid) ? DateTime.fromISO(value).toJSDate() : null;
    return (
      <div className={clsx('datepickerStyles')}>
        <DatePicker
          id={id}
          name={name}
          disabled={disabled}
          placeholderText={placeholder}
          locale="uk"
          dateFormat={format}
          showTimeInput={enableTime}
          showTimeSelectOnly={!enableDate}
          selected={selected}
          onChange={this.setValue}
          tabIndex={tabIndex ? parseInt(tabIndex, 10) : undefined}
          filterDate={this.filterDate}
          calendarClassName={clsx('datepickerStyles', classes.calendar)}
          customInput={(
            <DateTimePickerInput
              id={id}
              error={error}
              name={name || id}
              inputDisabled={inputDisabled}
              description={description}
            />
          )}
          customTimeInput={<TimePicker />}
          portalId="datepicker-portal"
        />
      </div>
    );
  }
}
