import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import withFormioControl from 'components/Form/components/WithFormioControl';
import Input from 'components/FormControls/Input';
import { FormControlError } from 'types/formControls';

import type { TextAreaComponent } from '../../types';
import styles from './CustomTextArea.styles';
import { transformTextCase } from 'utils';

interface Props {
  value: string | number,
  name: string;
  onChange: (value: unknown) => void;
  onBlur: () => void;
  component: TextAreaComponent;
  error?: FormControlError;
  disabled?: boolean;
}

const useStyles = makeStyles(styles);

const TextAreaAdapter: React.FC<Props> = (props: Props) => {
  const DEFAULT_ROWS_COUNT = 3;
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
      tabIndex={component.tabindex}
      textCase={component.case}
      description={component.description}
      error={error}
      textArea={{
        rows: DEFAULT_ROWS_COUNT,
        autoExpand: component.autoExpand,
      }}
    />
  );
};

export default (withFormioControl(TextAreaAdapter));
