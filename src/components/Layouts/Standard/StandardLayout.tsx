import React from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';
import Container from 'components/Container';
import Typography from 'components/Typography';
import Loader from 'components/Loader';
import styles from './StandardLayout.styles';

export interface StandardLayoutProps {
  navbar: React.ReactNode
  children?: React.ReactNode;
  title?: string;
  description?: string;
  isLoading?: boolean;
  disableBackground?: boolean;
}

const useStyles = makeStyles(styles, { name: 'StandardLayout' });

export default function StandardLayout(props: StandardLayoutProps) {
  const {
    title,
    description,
    navbar,
    isLoading = false,
    children,
  } = props;
  const classes = useStyles(props);

  return (
    <>
      <Container classes={{ root: classes.container }}>
        <Loader show={isLoading} data-xpath="component-loader" />
        <Box className={classes.header}>
          { navbar }
          <Grid container className={classes.wrap}>
            <Grid item xs={8}>
              <Box className={classes.title}>
                {title && <Typography variant="h1">{title}</Typography>}
                {description
                && <Typography variant="bodyText" className={classes.description}>{description}</Typography>}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.contentWrap}>{ children }</Box>
      </Container>
    </>
  );
}
