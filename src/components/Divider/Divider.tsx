import React from 'react';
import { Divider as MuiDivider, makeStyles } from '@material-ui/core';

import styles from './Divider.styles';

export interface DividerProps {
  color?: string
}

const useStyles = makeStyles(styles, { name: 'Divider' });

export default function Divider({ color }: DividerProps) {
  const classes = useStyles({ color });
  return (
    <MuiDivider classes={classes} />
  );
}
