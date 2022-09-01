import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import Divider from 'components/Divider';
import styles from './Navbar.styles';

const useStyles = makeStyles(styles, { name: 'Navbar' });

export interface NavbarProps {
  disableBackground?: boolean;
  children?: React.ReactNode;
  'data-xpath'?: string
}

const Navbar = (props: NavbarProps) => {
  const { children, 'data-xpath': dataXpath } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root} data-xpath={dataXpath}>
      <AppBar position="static" classes={{ colorPrimary: classes.appBarColorPrimary, root: classes.appBar }}>
        <Toolbar disableGutters classes={{ root: classes.appBar }}>
          { children }
        </Toolbar>
        <Divider />
      </AppBar>
    </div>
  );
};

export default Navbar;
