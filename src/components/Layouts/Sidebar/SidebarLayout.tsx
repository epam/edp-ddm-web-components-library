import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import Container from 'components/Container';
import Loader from 'components/Loader';
import Typography from 'components/Typography';

import styles from './SidebarLayout.styles';

export interface SidebarLayoutProps {
  navbar: React.ReactNode
  children: React.ReactNode;
  title?: string;
  isLoading?: boolean;
  sideBarContent?: string | React.ReactElement;
  classes?: { sidebarContainer: string };
}

const useStyles = makeStyles(styles, { name: 'SidebarLayout' });

export default function SidebarLayout({
  children,
  title,
  navbar,
  isLoading = false,
  sideBarContent = '',
  classes: classesProps,
}: SidebarLayoutProps) {
  const classes = useStyles();

  return (
    <Container noPadding>
      <Grid wrap="nowrap" container>
        <Grid item className={classes.mainContainer}>
          {navbar}
          <Container>
            <Loader show={isLoading} data-xpath="component-loader" />
            {title && <Typography variant="h2" className={classes.title}>{title}</Typography>}
            {children}
          </Container>
        </Grid>
        <Grid item className={clsx(classes.sidebarContainer, classesProps?.sidebarContainer)}>
          {
            typeof sideBarContent === 'string' && (
              <Typography variant="bodyText">
                {sideBarContent}
              </Typography>
            )
          }
          {
            typeof sideBarContent !== 'string' && (
              sideBarContent
            )
          }
        </Grid>
      </Grid>
    </Container>
  );
}
