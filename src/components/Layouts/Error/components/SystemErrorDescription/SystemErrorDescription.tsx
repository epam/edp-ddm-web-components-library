import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Typography from 'components/Typography';
import clsx from 'clsx';
import styles from './SystemErrorDescription.styles';

interface SystemErrorDescriptionProps {
  title: string;
  fields: {
    name: string,
    value: string,
  }[],
  className?: string,
}

const useStyles = makeStyles(styles, { name: 'SystemErrorDescription' });

export default function SystemErrorDescription({ title, fields, className }: SystemErrorDescriptionProps) {
  const classes = useStyles();
  return (
    <Box className={clsx(className, classes.root)}>
      <Typography variant="h7">
        {title}
      </Typography>
      {fields.map((item) => (
        <Box key={item.name} className={classes.box}>
          <Typography variant="tinyText" className={classes.title}>
            {item.name}
          </Typography>
          <Typography variant="smallText">
            {item.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
