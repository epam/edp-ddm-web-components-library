import React, { useCallback, useEffect, useRef } from 'react';
import { makeStyles, InputAdornment } from '@material-ui/core';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import clsx from 'clsx';

import { FormControlError } from 'types/formControls';
import FieldError from 'components/FieldError';
import DescriptionBox from 'components/DescriptionBox';

import { spacing } from 'styles';
import InputMask from './InputMask';
import InputNumberFormat from './InputNumberFormat';
import { parseValueToNumber } from '../../Form/utils';
import styles from './Input.styles';

const useStyles = makeStyles(styles, { name: 'Input' });

export type InputProps = Pick<TextFieldProps,
'label' |
'inputRef' |
'InputProps' |
'inputProps' |
'placeholder' |
'onFocus' |
'type' |
'fullWidth' |
'onClick' |
'disabled' |
'autoComplete' |
'defaultValue' |
'id'> & {
  name: string;
  description?: string,
  error?: FormControlError;
  value?: string | number;
  onChange?: (value: string | number | null) => void;
  onBlur?: () => void;
  onChangeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLabelShrink?: boolean,
  prefix?: React.ReactElement | string,
  suffix?: React.ReactElement | string,
  tabIndex?: string;
  inputMask?: string;
  inputMaskPlaceholderChar?: string;
  textCase?: 'uppercase' | 'lowercase' | 'mixed'
  className?: string;
  hideLabel?: boolean;
  textArea?: {
    rows?: number;
    autoExpand?: boolean;
  }
  requireDecimal?: boolean;
  decimalLimit?: number;
  delimiter?: boolean;
  withNumberFormat?: boolean;
};

export default function Input({
  id,
  type,
  name,
  description,
  label,
  inputRef,
  error,
  className,
  fullWidth,
  placeholder,
  isLabelShrink = false,
  InputProps: customProps,
  inputProps: customInputProps,
  value,
  defaultValue,
  prefix,
  suffix,
  disabled,
  tabIndex,
  autoComplete = 'off',
  textCase,
  inputMask,
  inputMaskPlaceholderChar,
  onChange,
  onBlur,
  onChangeEvent,
  onClick,
  hideLabel,
  textArea,
  onFocus,
  requireDecimal,
  decimalLimit,
  delimiter,
  withNumberFormat,
}: InputProps) {
  const classes = useStyles();
  const textFieldRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!textArea?.autoExpand) {
      return undefined;
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const elPadding = spacing * 2;
      const elTarget = e.target;
      elTarget.style.height = 'auto';
      elTarget.style.height = `${elTarget.scrollHeight - elPadding}px`;
    };

    const textField = textFieldRef.current;
    textField?.addEventListener('input', handleInput as unknown as EventListener);

    return () => textField?.removeEventListener('input', handleInput as unknown as EventListener);
  }, [textArea?.autoExpand]);

  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = withNumberFormat ? parseValueToNumber(e.target.value) : e.target.value;
    if (onChange) { onChange(targetValue); }
    if (onChangeEvent) { onChangeEvent(e); }
  }, [onChange, onChangeEvent, withNumberFormat]);

  return (
    <>
      <TextField
        id={id}
        name={name}
        inputRef={inputRef}
        ref={textFieldRef}
        value={value}
        defaultValue={defaultValue}
        onChange={handleOnChange}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
        className={clsx(classes.root, className, {
          [classes.textUppercase]: textCase === 'uppercase',
          [classes.textLowercase]: textCase === 'lowercase',
        })}
        type={type}
        error={!!error}
        label={label}
        placeholder={placeholder}
        fullWidth={fullWidth}
        multiline={!!textArea}
        rows={textArea?.rows}
        inputProps={{
          ...(inputMask && { inputMask }),
          ...(inputMaskPlaceholderChar && { inputMaskPlaceholderChar }),
          ...(requireDecimal && { requireDecimal }),
          ...(decimalLimit && { decimalLimit }),
          ...(delimiter && { delimiter }),
          tabIndex: tabIndex ? parseInt(tabIndex, 10) : undefined,
          className: clsx({
            [classes.autoExpandNone]: textArea?.autoExpand,
            [classes.autoExpandVertical]: !textArea?.autoExpand,
          }),
          ...customInputProps,
        }}
        disabled={disabled}
        autoComplete={autoComplete}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        InputProps={{
          classes: {
            input: classes.input,
            underline: classes.underline,
            focused: classes.focused,
            error: classes.error,
            disabled: classes.disabled,
          },
          startAdornment: prefix && <InputAdornment position="start">{prefix}</InputAdornment>,
          endAdornment: suffix && <InputAdornment position="end">{suffix}</InputAdornment>,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...(inputMask && { inputComponent: InputMask as any }),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...(withNumberFormat && { inputComponent: InputNumberFormat as any }),
          ...customProps,
        }}
        InputLabelProps={{
          className: classes.label,
          classes: {
            error: classes.labelState,
            focused: classes.labelState,
            root: clsx(hideLabel && classes.displayNone),
          },
          ...isLabelShrink && { shrink: isLabelShrink },
        }}
      />
      {description && <DescriptionBox description={description} /> }

      {error && (
        <FieldError error={error} />
      )}
    </>
  );
}
