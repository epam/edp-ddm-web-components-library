import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Status } from 'reapop';
import clsx from 'clsx';
import IconButton from 'components/IconButton';
import CloseIcon from 'components/Icons/CloseIcon';
import styles from './FlashMessage.styles';
import FlashMessageIcon from './components/FlashMessageIcon';

export enum ViewType {
  notification,
  plain,
}

export interface FlashMessageProps {
  status: Status;
  title?: string;
  message?: string | React.ReactNode;
  viewType?: ViewType;
  onClose?: () => void;
  customIcon?: React.ElementType;
  xpathConfig?: {
    messageBlock?: string,
    titleBlock?: string,
  };
}

const useStyles = makeStyles(styles, { name: 'FlashMessage' });

const FlashMessage = ({
  status,
  title,
  message,
  onClose,
  customIcon,
  viewType = ViewType.plain,
  xpathConfig,
}: FlashMessageProps) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, {
      [classes.error]: status === 'error',
      [classes.warning]: status === 'warning',
      [classes.success]: status === 'success',
      [classes.plain]: viewType === ViewType.plain,
      [classes.notification]: viewType === ViewType.notification,
      [classes.alignCenter]: title && !message,
    })}
    >
      <FlashMessageIcon status={status} customIcon={customIcon} />
      <div className={classes.content}>
        {title && <div className={classes.title} data-xpath={xpathConfig?.titleBlock}>{title}</div>}
        {message && (
        <div
          className={clsx({
            [classes.message]: title,
            [classes.plainMessage]: viewType === ViewType.plain,
          })}
          data-xpath={xpathConfig?.messageBlock}
        >
          {message}
        </div>
        )}
      </div>
      {
        onClose && (
          <IconButton className={classes.close} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        )
      }
    </div>
  );
};

export default FlashMessage;
