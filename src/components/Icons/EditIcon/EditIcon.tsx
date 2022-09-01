import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as Icon } from 'assets/icons/edit.svg';

import styles from './EditIcon.styles';

const useStyles = makeStyles(styles, { name: 'EditIcon' });

export default function EditIcon() {
  const classes = useStyles();
  return (
    <span className={classes.editIcon}>
      <Icon />
    </span>
  );
}
