import React, { Component } from 'react';
import { WithStyles } from '@material-ui/core/styles';
import MuiAutocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import { isEqual, omit } from 'lodash';

import { ReactComponent as PopupIcon } from 'assets/icons/popupIcon.svg';
import CloseIcon from 'components/Icons/CloseIcon';
import IconButton from 'components/IconButton';
import Typography from 'components/Typography';
import Input from 'components/FormControls/Input';
import { FormControlError } from 'types/formControls';

import styles from './Autocomplete.styles';

export interface ItemProps {
  value: string,
  label: string,
  originalValue?: unknown,
}

export interface AutocompleteProps {
  name: string,
  value: ItemProps | ItemProps[];
  label: string;
  onChange: (value: ItemProps | ItemProps[] | null) => void;
  options: ItemProps[];
  error?: FormControlError;
  placeholder?: string;
  multiple?: boolean;
  fullWidth?: boolean;
  noOptionsText?: string;
  disabled?: boolean;
  onInputChange?: (value: string | number) => void;
  onInputFocus?: () => void;
  onInputBlur?: () => void;
  hiddenLabel?: boolean;
  tabIndex?: number;
  description?: string;
}

export interface Props extends WithStyles<typeof styles>, AutocompleteProps {}

export default class Autocomplete extends Component<Props> {
  handleChange = (
    event: React.ChangeEvent<Record<string, unknown>>,
    value: ItemProps[] | ItemProps | null,
  ) => {
    this.props.onChange(value);
  };

  handleInputChange = (value: string | number) => {
    const { onInputChange } = this.props;
    if (onInputChange) {
      onInputChange(value);
    }
  };

  render() {
    const {
      name,
      value,
      label,
      disabled,
      placeholder,
      options,
      multiple,
      fullWidth,
      noOptionsText,
      classes,
      hiddenLabel,
      onInputChange,
      onInputFocus,
      onInputBlur,
      tabIndex,
      error,
      description,
    } = this.props;

    return (
      <>
        <MuiAutocomplete
          classes={{
            listbox: classes.listbox,
            popupIndicator: classes.popupIndicator,
            popupIndicatorOpen: classes.popupIndicatorOpen,
            endAdornment: classes.endAdornment,
            clearIndicator: classes.clearIndicator,
            popper: classes.popper,
            paper: classes.paper,
            inputRoot: classes.inputRoot,
          }}
          fullWidth={fullWidth}
          multiple={multiple}
          disabled={disabled}
          options={options}
          getOptionLabel={(option) => option.label || ''}
          value={value}
          renderTags={(values: ItemProps[], getTagProps) => values.map((option: ItemProps | null, index: number) => (
            <Chip
              {...getTagProps({ index })}
              key={option?.value}
              label={option?.label}
              className={classes.chip}
              deleteIcon={<IconButton className={classes.deleteIcon}><CloseIcon /></IconButton>}
            />
          ))}
          popupIcon={<PopupIcon />}
          closeIcon={<CloseIcon />}
          onInputChange={(_, newInputValue) => {
            this.handleInputChange(newInputValue);
          }}
          renderInput={(params) => (
            <Input
              {...params}
              name={`${name}-input`}
              label={label}
              placeholder={placeholder}
              InputProps={params.InputProps}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              inputProps={{ ...params.inputProps, tabIndex }}
              hideLabel={hiddenLabel}
              isLabelShrink={!!placeholder}
              disabled={disabled}
              error={error}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              description={description}
            />
          )}
          renderOption={(option) => (
            <Typography variant="bodyText">{option.label}</Typography>
          )}
          noOptionsText={noOptionsText}
          onChange={this.handleChange}
          filterOptions={onInputChange ? () => options : undefined}
          getOptionSelected={(option, currentValue) => isEqual(
            omit(option, ['originalValue']),
            omit(currentValue, ['originalValue']),
          )}
        />
      </>
    );
  }
}
