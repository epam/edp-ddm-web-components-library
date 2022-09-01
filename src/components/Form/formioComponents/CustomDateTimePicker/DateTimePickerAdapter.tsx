import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import withFormioControl from 'components/Form/components/WithFormioControl';
import DateTimePicker from 'components/FormControls/DateTimePicker';
import { FormControlError } from 'types/formControls';

import type { DateTimeComponent } from '../../types';
import styles from './CustomDatePicker.styles';

interface Props {
  value: string,
  name: string;
  onChange: (value: unknown) => void;
  component: DateTimeComponent;
  checkDateDisabled?: (date?: string) => boolean;
  error?: FormControlError;
  disabled?: boolean;
}

const useStyles = makeStyles(styles);

const FormioTextField: React.FC<Props> = (props: Props) => {
  const {
    value,
    name,
    onChange,
    component,
    checkDateDisabled,
    error,
    disabled,
  } = props;
  useStyles();

  return (
    <DateTimePicker
      id={`${component.id}-${component.key}`}
      value={value}
      name={name}
      onChange={onChange}
      disabled={disabled}
      inputDisabled={!component.allowInput}
      format={component.format}
      placeholder={component.placeholder}
      tabIndex={component.tabindex}
      checkDateDisabled={checkDateDisabled}
      enableDate={component.enableDate}
      enableTime={component.enableTime}
      description={component.description}
      error={error}
    />
  );
};

export default (withFormioControl(FormioTextField));
