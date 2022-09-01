import { makeStyles } from '@material-ui/core';
import React, { useCallback } from 'react';

import { CellComponentProps, ColumnDefinition, ListItem } from 'types/table';
import Button from 'components/Button';
import styles from './ButtonCell.styles';

interface Props extends CellComponentProps {
  onClick: (item: ListItem, columnDefinition: ColumnDefinition) => void;
  isDisabled: (item: ListItem) => boolean;
  title: string;
}

const useStyles = makeStyles(styles, { name: 'ButtonCell' });

export default function ButtonCell(props: Props) {
  const {
    columnDefinition,
    item,
    onClick,
    isDisabled,
    title,
  } = props;
  const classes = useStyles();

  const onClickHandler = useCallback(
    () => {
      onClick(item, columnDefinition);
    },
    [onClick, item, columnDefinition],
  );

  return (
    <Button onClick={onClickHandler} className={classes.button} disabled={isDisabled(item)}>{title}</Button>
  );
}
