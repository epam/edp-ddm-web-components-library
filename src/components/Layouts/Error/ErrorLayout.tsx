import { makeStyles } from '@material-ui/core';
import React, { useCallback } from 'react';
import Button from 'components/Button';
import Typography from 'components/Typography';
import SidebarLayout from 'components/Layouts/Sidebar';
import LinkBack from 'components/LinkBack';
import { ErrorInfo } from 'types/common';
import styles from './ErrorLayoutView.styles';
import DefaultErrorLayoutHeader, { ErrorLayoutHeaderProps } from './components/ErrorLayoutHeader/ErrorLayoutHeader';
import SystemErrorDescription from './components/SystemErrorDescription';
import ErrorSideBarContent from './components/ErrorSideBarContent';

interface ErrorLayoutProps {
  error: ErrorInfo,
  reloadButtonCaption: string,
  defaultErrorTitle: string,
  defaultBackLinkTitle: string,
  defaultMessage: string,
  defaultDescription: string,
  onBackLinkClick: (path?: string) => void,
  navLinkComponent: React.ElementType,
  headerComponent?: React.ElementType<ErrorLayoutHeaderProps>,
  appTitle: string,
  homePath: string,
  systemError?: {
    title: string;
    fields: {
      name: string,
      value: string,
    }[],
  };
  supportEmail?: {
    email: string,
    subject: string,
    body: string
  },
  sideBarContent?: {
    title: string,
    description: string,
  };
}

const useStyles = makeStyles(styles, { name: 'ErrorLayout' });

export default function ErrorLayout({
  error: {
    message,
    componentProps = {},
  },
  reloadButtonCaption,
  defaultErrorTitle,
  defaultBackLinkTitle,
  defaultMessage,
  defaultDescription,
  onBackLinkClick,
  navLinkComponent,
  headerComponent: ErrorLayoutHeader = DefaultErrorLayoutHeader,
  appTitle,
  homePath,
  systemError,
  supportEmail,
  sideBarContent,
}: ErrorLayoutProps) {
  const classes = useStyles();

  const backLinkTitle = componentProps.backLinkTitle || defaultBackLinkTitle;
  const backLinkPath = componentProps.backLink || homePath;
  const { hasRefreshBtn, hideNavigation } = componentProps;

  const handleBackLinkClick = useCallback(() => {
    onBackLinkClick(backLinkPath);
  }, [backLinkPath, onBackLinkClick]);

  const reloadPage = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <SidebarLayout
      navbar={(
        <ErrorLayoutHeader
          link={backLinkPath}
          title={backLinkTitle}
          navLinkComponent={navLinkComponent}
          appTitle={appTitle}
          homePath={homePath}
          hideNavigation={hideNavigation}
        />
      )}
      sideBarContent={(
        systemError && sideBarContent && supportEmail ? (
          <ErrorSideBarContent
            title={sideBarContent.title}
            description={sideBarContent.description}
            mail={supportEmail}
            errorData={systemError.fields}
          />
        ) : ''
      )}
    >
      <Typography variant="h1" className={classes.title}>
        {componentProps.title || defaultErrorTitle}
      </Typography>
      <div className={classes.fixedWidthContent}>
        <Typography variant="h3" className={classes.message}>
          {message || defaultMessage}
        </Typography>
        <Typography variant="bodyText" className={classes.description}>
          {componentProps.description || defaultDescription}
        </Typography>

        {systemError && (
          <SystemErrorDescription
            title={systemError.title}
            fields={systemError.fields}
          />
        )}

        {hasRefreshBtn ? (
          <>
            <Button onClick={reloadPage} className={classes.button}>
              <Typography variant="h7" component="span">
                {reloadButtonCaption}
              </Typography>
            </Button>
            {!hideNavigation && <LinkBack
              component={navLinkComponent}
              to={backLinkPath}
              title={backLinkTitle}
              classNameLink={classes.backLink}
              classNameTitle={classes.backTitle}
            />}
          </>
        ) : (
          <Button onClick={handleBackLinkClick} className={classes.button}>
            <Typography variant="h7" component="span">
              {backLinkTitle}
            </Typography>
          </Button>
        )}
      </div>
    </SidebarLayout>
  );
}
