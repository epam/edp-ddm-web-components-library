import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from 'components/Typography';
import LinkMail from 'components/LinkMail';
import styles from './ErrorSideBarContent.styles';

interface ErrorSideBarContentProps {
  title: string;
  description: string;
  errorData: {
    name: string,
    value: string,
  }[],
  mail: {
    email: string,
    subject: string,
    body: string
  }
}

const useStyles = makeStyles(styles, { name: 'ErrorSideBarContent' });

export default function ErrorSideBarContent({
  title, description, errorData, mail,
}: ErrorSideBarContentProps) {
  const classes = useStyles();
  const { email, subject, body } = mail;
  // %0D%0A is line break
  //  https://datatracker.ietf.org/doc/html/rfc2368#page-3
  const errorInfo = errorData.map((i) => (`%0D%0A${i.name}: ${i.value}`)).toString();

  return (
    <>
      <Typography variant="h5">
        {title}
      </Typography>
      <Typography variant="bodyText" className={classes.description}>
        {description}
      </Typography>
      <LinkMail email={email} subject={subject} body={`${body} ${errorInfo}`} />
    </>
  );
}
