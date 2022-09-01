import React from 'react';
import { Button as MaterialButton, ButtonProps as MaterialButtonProps, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import styles from './Button.styles';

export enum ButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
  text = 'text',
}

export type ButtonProps = Pick<MaterialButtonProps,
'onClick' |
'disabled' |
'children' |
'className' |
'size' |
'startIcon' |
'disableRipple' |
'buttonRef'> & {
  variant?: ButtonVariants;
  'data-xpath'?: string;
};

const useStyles = makeStyles(styles, { name: 'Button' });

const buttonPropsMap: Record<ButtonVariants, Partial<MaterialButtonProps>> = {
  primary: {
    variant: 'contained',
    color: 'primary',
  },
  secondary: {
    variant: 'outlined',
    color: 'secondary',
  },
  text: {
    variant: 'text',
    color: 'default',
  },
};

export default function Button({
  onClick, disabled, children, variant = ButtonVariants.primary,
  className,
  size,
  buttonRef,
  startIcon,
  disableRipple,
  'data-xpath': dataXPath,
} : ButtonProps) {
  const classes = useStyles();
  return (
    <div className={className}>
      <MaterialButton
        classes={classes}
        className={clsx(!!startIcon && classes.iconSizeSmall)}
        onClick={onClick}
        disabled={disabled}
        variant={buttonPropsMap[variant].variant}
        color={buttonPropsMap[variant].color}
        size={size}
        buttonRef={buttonRef}
        startIcon={startIcon}
        disableRipple={disableRipple}
        data-xpath={dataXPath}
      >
        {children}
      </MaterialButton>
    </div>
  );
}
