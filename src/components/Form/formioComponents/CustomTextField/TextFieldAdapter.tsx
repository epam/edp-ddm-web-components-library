import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import withFormioControl from 'components/Form/components/WithFormioControl';
import Input from 'components/FormControls/Input';
import { FormControlError } from 'types/formControls';

import type { TextComponent } from '../../types';
import styles from './CustomTextField.styles';
import { transformTextCase } from 'utils';

interface Props {
  value: string | number,
  error?: FormControlError;
  name: string;
  onChange: (value: unknown) => void;
  onBlur: () => void;
  component: TextComponent;
  disabled?: boolean;
}

const useStyles = makeStyles(styles);

const FormioTextField: React.FC<Props> = (props: Props) => {
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

  const handleChange = useCallback((v: string | number | null) => {
    return onChange(transformTextCase(v, component.case));
  }, [component.case, onChange]);

  return (
    <Input
      id={`${component.id}-${component.key}`}
      value={value || ''}
      name={name}
      onChange={handleChange}
      onBlur={onBlur}
      disabled={disabled}
      placeholder={component.placeholder}
      prefix={component.prefix}
      suffix={component.suffix}
      tabIndex={component.tabindex}
      type={component.mask ? 'password' : undefined}
      textCase={component.case}
      inputMask={component.inputMask}
      inputMaskPlaceholderChar={component.inputMaskPlaceholderChar}
      error={error}
      description={component.description}
      autoComplete={component.autocomplete}
    />
  );
};

export default (withFormioControl(FormioTextField));
