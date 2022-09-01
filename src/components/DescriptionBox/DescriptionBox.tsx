import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

import styles from './DescriptionBox.styles';

const useStyles = makeStyles(styles, { name: 'Description' });

export type DescriptionBoxProps = {
  description?: string;
};

export default function DescriptionBox({
  description,
}: DescriptionBoxProps) {
  const classes = useStyles();

  return (
    <Box component="span" className={classes.descriptionBox}>
      {description}
    </Box>
  );
}
