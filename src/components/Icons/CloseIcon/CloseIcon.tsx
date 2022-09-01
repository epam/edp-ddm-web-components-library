import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as Icon } from 'assets/icons/notifications/close.svg';

import styles from './CloseIcon.styles';

const useStyles = makeStyles(styles, { name: 'CloseIcon' });

export default function CloseIcon() {
  const classes = useStyles();
  return (
    <span className={classes.closeIcon}>
      <Icon />
    </span>
  );
}
