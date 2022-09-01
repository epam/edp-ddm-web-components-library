import React, { Component } from 'react';
import { WithStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import MuiRadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import { ReactComponent as RadioIcon } from 'assets/icons/radio.svg';
import RadioCheckedIcon from 'components/Icons/RadioCheckedIcon';
import uniqueId from 'lodash/uniqueId';
import isNil from 'lodash/isNil';
import { FormControlError } from 'types/formControls';
import DescriptionBox from 'components/DescriptionBox';

import styles from './RadioGroup.styles';
import FieldError from '../../FieldError';

interface ItemProps {
  value: string,
  label: string,
}

export interface RadioGroupProps {
  value: unknown;
  onChange: (value: string) => void;
  items: ItemProps[]
  name?: string;
  disabled?: boolean;
  row?: boolean;
  error?: FormControlError;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  description?: string;
}

export interface Props extends WithStyles<typeof styles>, RadioGroupProps {}

export default class RadioGroup extends Component<Props> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.value);
  };

  render() {
    const {
      value,
      name,
      disabled,
      items,
      classes,
      labelPlacement,
      row,
      error,
      description,
    } = this.props;

    return (
      <FormControl
        component="fieldset"
        classes={{ root: classes.root }}
      >
        <MuiRadioGroup value={value} onChange={this.handleChange} row={row} classes={{ root: classes.radioGroupRoot }}>
          {items.map((item: ItemProps) => (
            <FormControlLabel
              key={uniqueId(item.value)}
              value={item.value}
              disabled={disabled}
              label={item.label}
              labelPlacement={labelPlacement || 'end'}
              className={clsx(classes.label, disabled && classes.disabled)}
              control={(
                <Radio
                  checked={!isNil(value) && item.value === (value as string).toString()}
                  color="default"
                  name={name}
                  className={classes.radio}
                  icon={<RadioIcon />}
                  checkedIcon={<RadioCheckedIcon />}
                />
            )}
            />
          ))}
        </MuiRadioGroup>
        {description && <DescriptionBox description={description} />}
        {error && (
          <FieldError error={error} />
        )}
      </FormControl>
    );
  }
}
