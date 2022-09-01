import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import withFormioControl from 'components/Form/components/WithFormioControl';
import Input from 'components/FormControls/Input';
import { FormControlError } from 'types/formControls';

import type { NumberComponent } from '../../types';
import styles from './CustomNumber.styles';

interface Props {
  value: string | number,
  error?: FormControlError;
  name: string;
  onChange: (value: unknown) => void;
  onBlur: () => void;
  component: NumberComponent;
  disabled?: boolean;
}

const useStyles = makeStyles(styles);

const FormioNumber: React.FC<Props> = (props: Props) => {
  const {
    value,
    name,
    onChange,
    onBlur,
    component,
    error,
    disabled,
  } = props;
  useStyles();

  return (
    <Input
      withNumberFormat
      id={`${component.id}-${component.key}`}
      value={typeof value === 'number' ? value : ''}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      placeholder={component.placeholder}
      prefix={component.prefix}
      suffix={component.suffix}
      tabIndex={component.tabindex}
      type={component.mask ? 'password' : undefined}
      requireDecimal={component.requireDecimal}
      decimalLimit={component.decimalLimit}
      delimiter={component.delimiter}
      error={error}
      description={component.description}
      autoComplete={component.autocomplete}
    />
  );
};

export default (withFormioControl(FormioNumber));
