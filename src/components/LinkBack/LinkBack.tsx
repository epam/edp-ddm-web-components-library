import React from 'react';
import { ReactComponent as ArrowLeftIcon } from 'assets/icons/arrowLeft.svg';
import InlineButton from 'components/InlineButton';

type LinkProps = {
  to: string,
  onLinkClick?: (e: React.MouseEvent) => void,
};

type ButtonProps = {
  onLinkClick: (e: React.MouseEvent) => void,
} & Partial<LinkProps>;

type NavigationProps = LinkProps | ButtonProps;
type Props = {
  title?: string;
  classNameLink?: string;
  classNameTitle?: string;
  component: React.ElementType,
} & NavigationProps;

const LinkBack: React.FC<Props> = ({
  to,
  component,
  title,
  classNameLink,
  classNameTitle,
  onLinkClick,
}) => {
  return (
    <InlineButton
      size="small"
      leftIcon={
        <ArrowLeftIcon width={24} height={24} />
      }
      component={component}
      onLinkClick={onLinkClick}
      to={to}
      classes={{
        link: classNameLink,
        title: classNameTitle,
      }}
    >
      {title}
    </InlineButton>

  );
};

export default LinkBack;
