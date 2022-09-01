import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import styles from './Chip.styles';

export interface ChipProps {
  isSelected: boolean;
  onClick: () => void,
  title: string;
  icon: React.ReactNode;
  className?:string;
  disabled?: boolean;
}

const useStyles = makeStyles(styles, { name: 'Chip' });

export default function Chip({
  isSelected,
  onClick,
  disabled,
  title,
  icon,
  className,
}: ChipProps) {
  const classes = useStyles();
  return (
    <Box
      className={clsx(
        classes.chip,
        className,
        isSelected && classes.selected,
        disabled && classes.disabled,
      )}
      onClick={onClick}
    >
      <span>{icon}</span>
      <Box className={classes.title}>{title}</Box>
    </Box>
  );
}
