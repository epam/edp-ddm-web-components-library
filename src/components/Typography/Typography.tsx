import React from 'react';
import { makeStyles, Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@material-ui/core';
import clsx from 'clsx';
import * as textStyles from 'styles/text';

import styles from './Typography.styles';

type TypographyProps = Pick<
MuiTypographyProps, 'children' | 'className' | 'gutterBottom'
> & {
  halfOpacity?: boolean;
  variant?: keyof typeof textStyles;
  component?: React.ElementType;
};

const useStyles = makeStyles(styles, { name: 'Typography' });

const componentMapping = (variant: TypographyProps['variant']): React.ElementType => {
  switch (variant) {
    case 'h1': return 'h1';
    case 'h2': return 'h2';
    case 'h3': return 'h3';
    case 'h4': return 'h4';
    case 'h5': return 'h5';
    case 'h6': return 'h6';
    case 'h7': return 'p';
    case 'h8': return 'p';

    default: return 'p';
  }
};

export default function Typography({
  children, variant, className, gutterBottom, component,
  halfOpacity = false,
} : TypographyProps) {
  const { halfOpacity: hOpacity, ...classes } = useStyles();
  return (
    <MuiTypography
      component={component || componentMapping(variant)}
      className={clsx(variant && classes[variant], className, halfOpacity && hOpacity)}
      gutterBottom={gutterBottom}
    >
      {children}
    </MuiTypography>
  );
}
