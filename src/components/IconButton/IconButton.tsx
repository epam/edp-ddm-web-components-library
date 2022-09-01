import React from 'react';
import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import styles from './IconButton.styles';

export type IconButtonProps =
Pick<MuiIconButtonProps, 'children' | 'className' | 'aria-label' | 'onClick' | 'buttonRef'>;

const useStyles = makeStyles(styles, { name: 'IconButton' });

export default function IconButton({
  className, children, buttonRef, 'aria-label': ariaLabel, onClick,
} : IconButtonProps) {
  const classes = useStyles();

  return (
    <MuiIconButton
      className={clsx(className, classes.root)}
      aria-label={ariaLabel}
      edge="start"
      color="inherit"
      buttonRef={buttonRef}
      onClick={onClick}
    >
      {children}
    </MuiIconButton>
  );
}
