import { DEFAULT_INPUT_MASK_PLACEHOLDER_CHAR, MASK_REGEXP_CHARS } from 'components/Form/constants';
import React from 'react';
import IMaskInput from 'react-input-mask';

interface InputMaskProps {
  inputMask: string
  inputMaskPlaceholderChar?: string
  onChange: (event: { target: { value: string | number } }) => void;
}

const InputMask = (props: InputMaskProps) => {
  const {
    onChange, inputMask, inputMaskPlaceholderChar, ...other
  } = props;

  const placeholder = inputMask.replace(
    MASK_REGEXP_CHARS,
    inputMaskPlaceholderChar || DEFAULT_INPUT_MASK_PLACEHOLDER_CHAR,
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === placeholder) {
      onChange({ target: { value: '' } });
      return;
    }

    onChange({ target: { value } });
  };

  return (
    <IMaskInput
      {...other}
      mask={inputMask}
      placeholder={placeholder}
      maskChar={inputMaskPlaceholderChar}
      onChange={handleChange}
    />
  );
};

export default InputMask;
