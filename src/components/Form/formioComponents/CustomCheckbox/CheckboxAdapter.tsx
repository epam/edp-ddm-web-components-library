import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import withFormioControl from 'components/Form/components/WithFormioControl';
import Checkbox from 'components/FormControls/Checkbox';
import { FormControlError } from 'types/formControls';

import type { FormComponent } from '../../types';
import styles from './CustomCheckbox.styles';

interface Props {
  value: boolean;
  name: string;
  onChange: (value: unknown) => void;
  component: FormComponent;
  error?: FormControlError;
  disabled?: boolean;
}

const useStyles = makeStyles(styles);

const FormioCheckbox: React.FC<Props> = (props: Props) => {
  const {
    value,
    onChange,
    component,
    name,
    error,
    disabled,
  } = props;
  useStyles();

  return (
    <Checkbox
      id={component.key}
      name={name}
      label={component.label}
      disabled={disabled}
      value={value}
      onChange={onChange}
      error={error}
      description={component.description}
      hideLabel={component.hideLabel}
      required={component.validate?.required}
    />
  );
};

export default (withFormioControl(FormioCheckbox));
