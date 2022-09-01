import React from 'react';
import NumberFormat from 'react-number-format';
import { THOUSANDS_SEPARATOR, DECIMAL_SEPARATOR } from '../../Form/constants';

interface NumberFormatCustomProps {
  inputRef: (instance: string | null) => void;
  onChange: (event: { target: { value: string } }) => void;
  requireDecimal: boolean;
  decimalLimit: number;
  delimiter: boolean;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
  const {
    inputRef, onChange, requireDecimal = false, decimalLimit, delimiter = false, ...other
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ target: { value: event.target.value } });
  };

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onChange={handleChange}
      thousandSeparator={delimiter ? THOUSANDS_SEPARATOR : ''}
      decimalScale={decimalLimit}
      isNumericString
      fixedDecimalScale={requireDecimal}
      decimalSeparator={DECIMAL_SEPARATOR}
    />
  );
}

export default NumberFormatCustom;
