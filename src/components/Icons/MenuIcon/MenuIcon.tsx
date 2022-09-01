import React from 'react';
import { makeStyles } from '@material-ui/core';

import { ReactComponent as Icon } from 'assets/icons/menu.svg';
import styles from './MenuIcon.styles';

const useStyles = makeStyles(styles, { name: 'MenuIcon' });

export default function MenuIcon() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Icon />
    </div>
  );
}
