import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

import { ReactComponent as ErrorIcon } from 'assets/icons/error.svg';
import { FormControlError } from 'types/formControls';

import styles from './FieldError.styles';

const useStyles = makeStyles(styles, { name: 'Input' });

export type FieldErrorProps = {
  error: FormControlError;
};

export default function FieldError({
  error,
}: FieldErrorProps) {
  const classes = useStyles();

  return (
    <Box component="span" className={classes.errorBox}>
      <ErrorIcon />
      <Box component="span" className={classes.textError}>{error.message}</Box>
    </Box>
  );
}
