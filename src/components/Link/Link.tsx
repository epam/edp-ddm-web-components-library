import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import styles from './Link.styles';

const useStyles = makeStyles(styles, { name: 'Link' });

interface Props {
  to?: string;
  children: React.ReactNode;
  component?: React.ElementType;
  className?: string;
  activeClassName?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Link: React.FC<Props> = ({
  to,
  component: Component,
  children,
  className,
  onClick,
  ...rest
}) => {
  const classes = useStyles();
  if (Component) {
    return (
      <Component
        to={to}
        className={clsx(classes.link, className)}
        onClick={onClick}
        {...rest}
      >
        {children}
      </Component>
    );
  }
  return (
    <a href={to} className={clsx(classes.link, className)} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
