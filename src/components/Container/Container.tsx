import clsx from 'clsx';
import React from 'react';
import { Container as MuiContainer, ContainerProps as MuiContainerProps, makeStyles } from '@material-ui/core';

import styles from './Container.styles';

type ContainerProps = Pick<MuiContainerProps, 'children'>;

export interface Props extends ContainerProps {
  classes?: { root?: string };
  noPadding?: boolean;
}

const useStyles = makeStyles(styles, { name: 'Container' });

export default function Container(props: Props) {
  const { children, classes } = props;
  const localClasses = useStyles(props);
  return (
    <MuiContainer
      maxWidth="xl"
      classes={{
        root: clsx(classes?.root, localClasses.root),
      }}
    >
      {children}
    </MuiContainer>
  );
}
