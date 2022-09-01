import React from 'react';
import {
  makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';

import PopperButton from 'components/PopperButton';
import { ButtonType } from 'types/popper';
import MenuIcon from 'components/Icons/MenuIcon';
import MenuItem from 'components/MenuList/components/MenuItem';
import MenuList from 'components/MenuList';

import styles from './EditGridActions.styles';

type EditGridActionsProps = {
  onDeleteClick: () => void,
  onEditClick: () => void,
  deleteButtonText: string,
  editButtonText: string,
  editButtonDisabled?: boolean,
  deleteButtonDisabled?: boolean,
};

const useStyles = makeStyles(styles, { name: 'EditGridActions' });

export default function EditGridActions({
  onDeleteClick,
  onEditClick,
  deleteButtonText,
  editButtonText,
  editButtonDisabled,
  deleteButtonDisabled,
}: EditGridActionsProps) {
  const classes = useStyles();

  return (
    <PopperButton
      buttonType={ButtonType.icon}
      buttonProps={{
        children: <MenuIcon />,
      }}
      placement="bottom-end"
    >
      <MenuList className={classes.menuList}>
        <MenuItem
          onClick={onEditClick}
          className={classes.menuItem}
          disabled={editButtonDisabled}
        >
          {editButtonText}
        </MenuItem>
        <hr className={classes.line} />
        <MenuItem
          onClick={onDeleteClick}
          className={clsx(classes.menuItem, classes.menuItemDelete)}
          disabled={deleteButtonDisabled}
        >
          {deleteButtonText}
        </MenuItem>
      </MenuList>
    </PopperButton>
  );
}
