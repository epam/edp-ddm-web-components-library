import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import styles from './ColoredBox.styles';

type ColoredBoxProps = {
  children: React.ReactNode,
  className?: string,
};

const useStyles = makeStyles(styles, { name: 'ColoredBox' });

export default function ColoredBox({ children, className }: ColoredBoxProps) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      {children}
    </div>
  );
}
