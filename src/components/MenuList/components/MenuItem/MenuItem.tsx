import React, { useContext } from 'react';
import { makeStyles, MenuItem as MuiMenuItem, MenuItemProps as MuiMenuItemProps } from '@material-ui/core';
import clsx from 'clsx';

import { MenuListSizeContext } from 'components/MenuList/MenuList';
import styles from './MenuItem.styles';

type MenuItemProps = {
  children: React.ReactNode,
  className?: string,
  disabled?: boolean,
  onClick?: MuiMenuItemProps['onClick'],
  'data-xpath'?: string
};

const useStyles = makeStyles(styles, { name: 'MenuItem' });

export default function MenuItem({
  children, className, onClick, 'data-xpath': dataXpath, disabled,
}: MenuItemProps) {
  const itemSize = useContext(MenuListSizeContext);

  const classes = useStyles();
  return (
    <MuiMenuItem
      className={clsx(
        classes.root,
        className,
        itemSize === 'small' && classes.small,
        !onClick && classes.plain,
      )}
      onClick={onClick}
      data-xpath={dataXpath}
      disabled={disabled}
    >
      {children}
    </MuiMenuItem>
  );
}
