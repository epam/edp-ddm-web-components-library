import React from 'react';
import { useTheme } from '@material-ui/core';

export default function RadioCheckedIcon() {
  const theme = useTheme();
  return (
    <span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" stroke={theme.colors.uIBase} strokeWidth="2" />
        <circle cx="12" cy="12" r="7" fill={theme.colors.uIBase} />
      </svg>
    </span>
  );
}
