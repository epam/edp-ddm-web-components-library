import React from 'react';
import Navbar from 'components/Navbar';
import { Box, makeStyles } from '@material-ui/core';
import Container from 'components/Container';
import LinkBack from 'components/LinkBack';
import HomeButton from 'components/Navbar/components/HomeButton';
import styles from './ErrorLayoutHeader.styles';

export interface ErrorLayoutHeaderProps {
  link: string;
  title?: string;
  navLinkComponent: React.ElementType;
  appTitle: string;
  homePath: string;
  hideNavigation?: boolean;
}

const useStyles = makeStyles(styles, { name: 'ErrorLayoutHeader' });

export default function ErrorLayoutHeader({
  link, title = '', navLinkComponent, appTitle, homePath, hideNavigation,
}:ErrorLayoutHeaderProps) {
  const classes = useStyles();
  return (
    <Container noPadding classes={{ root: classes.container }}>
      <Navbar disableBackground>
        <Box className={classes.box}>
          <Box>
            {!hideNavigation && <LinkBack to={link} title={title} component={navLinkComponent} />}
          </Box>
          <HomeButton direction="right" navLinkComponent={navLinkComponent} appTitle={appTitle} homePath={homePath} />
        </Box>
      </Navbar>
    </Container>

  );
}
