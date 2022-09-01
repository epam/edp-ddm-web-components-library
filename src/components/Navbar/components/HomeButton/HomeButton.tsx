import React from 'react';
import { makeStyles } from '@material-ui/core';
import Link from 'components/Link';
import Typography from 'components/Typography';
import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg';
import styles from './HomeButton.styles';

const useStyles = makeStyles(styles, { name: 'EGovNavbar' });

export interface Props {
  direction: 'right' | 'left';
  appTitle: string;
  navLinkComponent: React.ElementType;
  homePath: string;
}

const HomeButton: React.FC<Props> = (props) => {
  const {
    direction, appTitle, navLinkComponent, homePath,
  } = props;
  const classes = useStyles(props);

  return (
    <Link to={homePath} className={classes.logo} component={navLinkComponent}>
      {
        direction === 'left' && <LogoIcon />
      }
      <Typography variant="siteNames" className={classes.title}>
        {appTitle}
      </Typography>
      {
        direction === 'right' && <LogoIcon />
      }
    </Link>
  );
};

export default HomeButton;
