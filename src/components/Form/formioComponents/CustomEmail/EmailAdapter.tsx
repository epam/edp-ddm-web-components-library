import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import withFormioControl from 'components/Form/components/WithFormioControl';
import Input from 'components/FormControls/Input';
import { FormControlError } from 'types/formControls';

import type { EmailComponent } from '../../types';
import styles from './CustomEmail.styles';

interface Props {
  value: string | number,
  name: string;
  onChange: (value: unknown) => void;
  onBlur: () => void;
  component: EmailComponent;
  error?: FormControlError;
  disabled?: boolean;
}

const useStyles = makeStyles(styles);

const FormioEmail: React.FC<Props> = (props: Props) => {
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
      id={`${component.id}-${component.key}`}
      value={value || ''}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      placeholder={component.placeholder}
      prefix={component.prefix}
      suffix={component.suffix}
      tabIndex={component.tabindex}
      type={component.mask ? 'password' : undefined}
      error={error}
      description={component.description}
      autoComplete={component.autocomplete}
    />
  );
};

export default (withFormioControl(FormioEmail));
