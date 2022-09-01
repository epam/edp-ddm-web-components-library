import React from 'react';

import clsx from 'clsx';
import padStart from 'lodash/padStart';
import { TextField, WithStyles } from '@material-ui/core';

import Divider from 'components/Divider';
import styles from './TimePicker.styles';
import Typography from '../../../../Typography';

export type TimePickerProps = {
  date?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export interface Props extends TimePickerProps, WithStyles<typeof styles> {}

export default class TimePicker extends React.Component<Props> {
  getValue = () => {
    const {
      value,
    } = this.props;
    return value || '00:00';
  };

  getHours = () => {
    const value = this.getValue();
    return value.split(':')[0] || '00';
  };

  getMinutes = () => {
    const value = this.getValue();
    return value.split(':')[1] || '00';
  };

  onHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      onChange,
    } = this.props;
    const hours = padStart(e.target.value, 2, '0');
    const minutes = this.getMinutes();
    const result = [hours, minutes].join(':');

    if (onChange) {
      onChange(result);
    }
  };

  onMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      onChange,
    } = this.props;
    const minutes = padStart(e.target.value, 2, '0');
    const hours = this.getHours();
    const result = [hours, minutes].join(':');

    if (onChange) {
      onChange(result);
    }
  };

  render() {
    const {
      value = '00:00',
      classes,
    } = this.props;
    const hours = this.getHours();
    const minutes = this.getMinutes();

    return (
      <>
        <Divider />
        <div className={classes.root}>
          <TextField
            value={hours}
            onChange={this.onHoursChange}
            className="ssd"
            type="number"
            inputProps={{
              max: 24,
              min: 0,
              className: classes.inputText,
            }}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            InputProps={{
              className: classes.input,
            }}
          />
          <Typography variant="smallText" className={classes.separator}>:</Typography>
          <TextField
            value={minutes}
            onChange={this.onMinutesChange}
            type="number"
            inputProps={{
              max: 59,
              min: 0,
              className: classes.inputText,
            }}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            InputProps={{
              className: classes.input,
            }}
          />
        </div>
      </>
    );
  }
}
