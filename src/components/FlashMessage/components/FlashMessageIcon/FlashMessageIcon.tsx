import React from 'react';
import { Status } from 'reapop';

import { ReactComponent as ErrorIcon } from 'assets/icons/notifications/error.svg';
import { ReactComponent as WarningIcon } from 'assets/icons/notifications/warning.svg';
import { ReactComponent as SuccessIcon } from 'assets/icons/notifications/success.svg';

interface FlashMessageIconProps {
  status: Status;
  customIcon?: React.ElementType;
}

const FlashMessageIcon: React.FC<FlashMessageIconProps> = (props: FlashMessageIconProps) => {
  const { status, customIcon: CustomIcon } = props;

  if (CustomIcon) {
    return <CustomIcon />;
  }

  switch (true) {
    case status === 'error':
      return <ErrorIcon />;
    case status === 'warning':
      return <WarningIcon />;
    case status === 'success':
      return <SuccessIcon />;
    default:
      return null;
  }
};

export default FlashMessageIcon;
