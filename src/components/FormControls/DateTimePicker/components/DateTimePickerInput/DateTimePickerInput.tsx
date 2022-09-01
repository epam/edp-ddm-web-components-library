import React from 'react';

import Input from 'components/FormControls/Input';
import CalendarIcon from 'components/Icons/CalendarIcon';
import { FormControlError } from 'types/formControls';

export type IconButtonProps = {
  name: string;
  id?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  inputDisabled?: boolean;
  tabIndex?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: FormControlError;
  description?: string;
};

const DateTimePickerInput = ({
  id,
  value,
  onClick,
  onChange,
  onFocus,
  disabled,
  inputDisabled,
  name,
  tabIndex,
  placeholder,
  error,
  description,
} : IconButtonProps, ref: React.Ref<HTMLInputElement>) => {
  return (
    <Input
      id={id}
      inputRef={ref}
      tabIndex={tabIndex}
      name={name}
      placeholder={placeholder}
      value={value}
      onClick={onClick}
      onFocus={onFocus}
      onChangeEvent={onChange}
      disabled={disabled || inputDisabled}
      suffix={<CalendarIcon />}
      error={error}
      description={description}
    />
  );
};

export default React.forwardRef(DateTimePickerInput);
