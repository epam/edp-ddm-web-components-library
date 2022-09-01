import { WithStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from 'clsx';

import Typography from 'components/Typography';
import { FormControlError } from 'types/formControls';
import FieldError from 'components/FieldError';
import DescriptionBox from 'components/DescriptionBox';

import styles from './Checkbox.styles';
import { CheckedIcon } from './components/CheckedIcon';
import { UncheckedIcon } from './components/UncheckedIcon';

export interface CheckboxProps {
  value: boolean;
  onChange: (value: boolean) => void;
  id: string;
  name?: string;
  label?: string;
  disabled?: boolean;
  error?: FormControlError;
  hideLabel?: boolean;
  description?: string;
  required?: boolean;
}

export interface Props extends CheckboxProps, WithStyles<typeof styles> {}

export class Checkbox extends Component<Props> {
  setValue = (event: React.ChangeEvent<{ checked: boolean }>) => {
    this.props.onChange(event.target.checked);
  };

  render() {
    const {
      value,
      id,
      classes,
      label,
      disabled,
      name,
      error,
      hideLabel,
      description,
      required,
    } = this.props;

    return (
      <>
        <FormControlLabel
          className={clsx(classes.label, required && 'field-required')}
          control={(
            <MuiCheckbox
              id={id}
              name={name}
              checked={value}
              onChange={this.setValue}
              className={classes.root}
              disabled={disabled}
              checkedIcon={<CheckedIcon />}
              icon={<UncheckedIcon />}
              color="default"
            />
          )}
          label={!hideLabel && <Typography variant="h7" component="span">{label}</Typography>}
        />
        {description && <DescriptionBox description={description} />}
        {error && (
          <FieldError error={error} />
        )}
      </>
    );
  }
}
