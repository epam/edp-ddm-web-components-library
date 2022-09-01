import React from 'react';
import MuiSwitch from '@material-ui/core/Switch';

export interface SwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
  name?: string;
}

export default function Switch({
  value,
  onChange,
  name,
}: SwitchProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <MuiSwitch
      checked={value}
      onChange={handleChange}
      name={name}
    />
  );
}
