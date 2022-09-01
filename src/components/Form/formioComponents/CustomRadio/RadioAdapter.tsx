import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import withFormioControl from 'components/Form/components/WithFormioControl';
import RadioGroup from 'components/FormControls/RadioGroup';
import { FormControlError } from 'types/formControls';

import type { RadioComponent } from '../../types';
import styles from './CustomRadio.styles';

interface Props {
  value: string;
  name?: string;
  onChange: (value: unknown) => void;
  component: RadioComponent;
  error?: FormControlError;
  disabled?: boolean;
}

const useStyles = makeStyles(styles);

const FormioRadio: React.FC<Props> = (props: Props) => {
  const {
    value,
    name,
    onChange,
    component,
    error,
    disabled,
  } = props;
  useStyles();

  const labelPosition = useMemo(() => {
    const { optionsLabelPosition } = component;

    if (optionsLabelPosition === 'left') {
      return 'start';
    }

    if (optionsLabelPosition === 'right') {
      return 'end';
    }

    return optionsLabelPosition;
  }, [component]);

  return (
    <RadioGroup
      disabled={disabled}
      items={component.values}
      row={component.inline}
      labelPlacement={labelPosition}
      value={value}
      name={name}
      onChange={onChange}
      error={error}
      description={component.description}
    />
  );
};

export default (withFormioControl(FormioRadio));
