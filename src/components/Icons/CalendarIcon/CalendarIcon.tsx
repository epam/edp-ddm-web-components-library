import React from 'react';

import { ReactComponent as Icon } from 'assets/icons/calendar.svg';
import { makeStyles } from '@material-ui/core';
import styles from './CalendarIcon.styles';

const useStyles = makeStyles(styles, { name: 'CalendarIcon' });

export default function CalendarIcon() {
  const classes = useStyles();
  return (
    <Icon className={classes.calendarIcon} />
  );
}
