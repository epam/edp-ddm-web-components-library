import React from 'react';
import { makeStyles } from '@material-ui/core';

import { ReactComponent as Icon } from 'assets/icons/plus.svg';
import styles from './PlusIcon.styles';

const useStyles = makeStyles(styles, { name: 'PlusIcon' });

export default function PlusIcon() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Icon />
    </div>
  );
}
