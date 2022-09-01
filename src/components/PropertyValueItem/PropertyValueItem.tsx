import React from 'react';
import Typography from 'components/Typography';
import { makeStyles } from '@material-ui/core';
import styles from './PropertyValueItem.styles';

type PropertyValueItemProps = {
  property: string,
  value: string | React.ReactNode,
  className?: string,
};

const useStyles = makeStyles(styles, { name: 'PropertyValueItem' });

export default function PropertyValueItem({ property, value, className }: PropertyValueItemProps) {
  const classes = useStyles();
  return (
    <div className={className}>
      <Typography variant="tinyText" className={classes.property}>{property}</Typography>
      <Typography variant="bodyText" className={classes.value}>{value}</Typography>
    </div>
  );
}
