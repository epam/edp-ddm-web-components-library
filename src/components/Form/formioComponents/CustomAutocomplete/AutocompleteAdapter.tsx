import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import withFormioControl from 'components/Form/components/WithFormioControl';
import { FormControlError } from 'types/formControls';
import { FormComponent, SelectComponent } from 'components/Form/types';
import Autocomplete from 'components/FormControls/Autocomplete';
import { ItemProps } from 'components/FormControls/Autocomplete/Autocomplete';
import styles from './CustomAutocomplete.styles';

interface AutocompleteAdapterProps {
  value: ItemProps | ItemProps[];
  name: string;
  onChange: (value: unknown) => void;
  component: FormComponent;
  options: ItemProps[];
  onInputChange?: (value: string | number) => void;
  onInputFocus?: () => void;
  onInputBlur?: () => void;
  valueFormatter: (value: ItemProps | ItemProps[], useEmptyValue?: boolean) => ItemProps | ItemProps[];
  error?: FormControlError;
  disabled?: boolean;
}

const useStyles = makeStyles(styles);

function AutocompleteAdapter({
  name,
  value,
  onChange,
  component: componentDefinition,
  options,
  onInputChange,
  onInputFocus,
  onInputBlur,
  valueFormatter,
  error,
  disabled,
} : AutocompleteAdapterProps) {
  const component = componentDefinition as SelectComponent;
  useStyles();
  /*
    please don't remove memoize because it prevents resetting input value
    from material.ui v.4 source: material-ui/lab/esm/useAutocomplete/useAutocomplete.js
    React.useEffect(function () {
      resetInputValue(null, value);
    }, [value, resetInputValue]);
  */
  const formattedValue = useMemo(() => {
    return valueFormatter(value);
  }, [value, valueFormatter]);

  return (
    <Autocomplete
      label={component.label}
      name={name}
      value={formattedValue}
      onChange={onChange}
      options={options}
      multiple={component.multiple}
      onInputChange={onInputChange}
      onInputFocus={onInputFocus}
      onInputBlur={onInputBlur}
      disabled={disabled}
      hiddenLabel
      tabIndex={component.tabindex ? parseInt(component.tabindex, 10) : undefined}
      placeholder={component.placeholder}
      description={component.description}
      error={error}
    />
  );
}

export default withFormioControl(AutocompleteAdapter);
