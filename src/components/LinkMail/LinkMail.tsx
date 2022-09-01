import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as MailIcon } from 'assets/icons/mail.svg';

import Typography from 'components/Typography';
import styles from './LinkMail.styles';

const useStyles = makeStyles(styles, { name: 'Link' });

interface Props {
  email: string;
  subject: string;
  body: string;
}

const LinkMail: React.FC<Props> = ({
  email,
  subject,
  body,
}) => {
  const classes = useStyles();
  const hrefUrl = `mailto:${email}?subject=${subject}&body=${body}`;
  return (
    <a target="_blank" rel="noreferrer" href={hrefUrl} className={classes.link}>
      <MailIcon />
      <Typography variant="h8" component="span">{email}</Typography>
    </a>
  );
};

export default LinkMail;
