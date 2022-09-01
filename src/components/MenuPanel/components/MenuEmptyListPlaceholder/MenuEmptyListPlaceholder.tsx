import React from 'react';
import { makeStyles } from '@material-ui/core';

import Typography from 'components/Typography';
import FolderIcon from 'components/Icons/FolderIcon';

import styles from './MenuEmptyListPlaceholder.styles';

interface Props {
  message: string;
  description: string;
}

const useStyles = makeStyles(styles, { name: 'MenuEmptyListPlaceholder' });

export default function MenuEmptyListPlaceholder({ message, description }: Props) {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h1" className={classes.title}><FolderIcon /></Typography>
      <Typography variant="h3" className={classes.message}>{message}</Typography>
      <Typography variant="h7" className={classes.description}>{description}</Typography>
    </>
  );
}
