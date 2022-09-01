import React from 'react';
import { makeStyles, MenuList as MuiMenuList, MenuListProps as MuiMenuListProps } from '@material-ui/core';
import clsx from 'clsx';
import styles from './MenuList.styles';

export type MenuListProps = {
  className?: string,
  children: React.ReactNode,
  size?: 'small' | 'medium',
};

export const MenuListSizeContext = React.createContext('medium');

const useStyles = makeStyles(styles, { name: 'MenuList' });

const MenuList = React
  .forwardRef(({ children, className, size = 'medium' }: MenuListProps, ref: MuiMenuListProps['ref']) => {
    const classes = useStyles();
    return (
      <MenuListSizeContext.Provider value={size}>
        <MuiMenuList className={clsx(classes.root, className)} ref={ref}>
          {children}
        </MuiMenuList>
      </MenuListSizeContext.Provider>
    );
  });

MenuList.displayName = 'MenuList';

export default MenuList;
