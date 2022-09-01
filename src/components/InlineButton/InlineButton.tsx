import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import Link from 'components/Link';
import Typography from 'components/Typography';
import React, { useCallback } from 'react';
import styles from './InlineButton.styles';

type LinkProps = {
  to: string,
  onLinkClick?: (e: React.MouseEvent) => void,
};

type ButtonProps = Partial<LinkProps>;

type NavigationProps = LinkProps | ButtonProps;
export type InlineButtonProps = {
  children: React.ReactNode,
  classes?: {
    link?: string,
    title?: string,
  },
  component?: React.ElementType,
  leftIcon?: React.ReactNode,
  size?: 'medium' | 'small',
  disabled?: boolean,
} & NavigationProps;

const useStyles = makeStyles(styles, { name: 'InlineButton' });

export default function InlineButton({
  onLinkClick,
  component,
  to,
  leftIcon,
  children,
  size = 'medium',
  disabled = false,
  classes,
}: InlineButtonProps) {
  const ownClasses = useStyles();
  const onClick = useCallback((e: React.MouseEvent) => {
    if (onLinkClick && !disabled) {
      onLinkClick(e);
    }
  }, [onLinkClick, disabled]);

  return (
    <Link
      to={to}
      className={clsx(
        ownClasses.link,
        classes?.link,
        disabled && ownClasses.disabled,
        size === 'medium' && ownClasses.mediumPadding,
      )}
      component={component}
      onClick={onClick}
    >
      {/* left margin for medium size */}
      {leftIcon}
      <Typography
        className={clsx(
          classes?.title,
          size === 'medium' && ownClasses.medium,
          size === 'small' && ownClasses.small,
          !disabled && ownClasses.text,
          leftIcon && ownClasses.iconMargin,
        )}
      >
        {children}
      </Typography>
    </Link>
  );
}
