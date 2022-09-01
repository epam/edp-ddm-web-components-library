import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import Divider from 'components/Divider';
import Link from 'components/Link';
import Typography from 'components/Typography';
import UpRightArrowIcon from 'components/Icons/UpRightArrowIcon';

import menuPanelStyles from './MenuPanel.styles';

export interface Props {
  title: string;
  linkComponent: React.ElementType;
  titleLink?: string;
  countDescription?: string;
  count?: number;
  hasError?: boolean,
  unknownErrorText?: string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  'data-xpath'?: string;
}

const useStyles = makeStyles(menuPanelStyles, { name: 'MenuPanel' });

export default function MenuPanel({
  count,
  title,
  titleLink,
  countDescription,
  onClick,
  hasError,
  linkComponent,
  unknownErrorText,
  'data-xpath': dataXpath,
}: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root} data-xpath={dataXpath}>
      <Divider />
      <Typography variant="h3" className={classes.title}>
        {
          titleLink && (
            <Link to={titleLink} className={classes.link} component={linkComponent}>
              <UpRightArrowIcon className={classes.linkIcon} />
              {title}
            </Link>
          )
        }
        {
          onClick && (
            <button type="button" className={clsx(classes.link, classes.buttonLink)} onClick={onClick}>
              <UpRightArrowIcon className={classes.linkIcon} />
              {title}
            </button>
          )
        }
        {
          !titleLink && !onClick && title
        }
      </Typography>
      <Typography variant="bodyText" className={classes.description}>
        { countDescription }
      </Typography>
      {hasError ? <Typography halfOpacity variant="h3">{unknownErrorText}</Typography> : (
        <Typography variant="h1">
          { count }
        </Typography>
      )}
    </div>
  );
}
