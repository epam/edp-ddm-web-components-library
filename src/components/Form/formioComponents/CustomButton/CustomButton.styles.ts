import { createStyles, Theme } from '@material-ui/core';

import {
  bodyText,
  h7,
} from 'styles';
import { outlinedSecondaryStyles } from 'components/Button/Button.styles';
import cancelIcon from 'assets/icons/cancel.svg';
import cancelHoverIcon from 'assets/icons/cancelBlack.svg';
import { COMPONENT_CLASSES } from '../../constants';

export const createButtonStyles = (theme: Theme) => ({
  [`.${COMPONENT_CLASSES.buttonPrimaryComponent}, .${COMPONENT_CLASSES.buttonSecondaryComponent}`]: {
    '& .button-icon-right': {
      display: 'none',
    },
    '& .btn.btn:not(.editRow):not(.removeRow)': {
      ...h7,
      boxShadow: 'none !important',
      border: 'none',
      textTransform: 'none',
      borderRadius: 40,
      padding: `${theme.spacing(2)}px ${theme.spacing(5)}px`,
      borderColor: 'initial',
      '&:disabled': {
        opacity: 1,
        borderColor: 'initial',
      },
    },
    '& .btn.editRow, .btn.removeRow': {
      ...bodyText,
      cursor: 'pointer',
      '&.btn-danger': {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
      },
    },
  },
  [`div.${COMPONENT_CLASSES.buttonPrimaryComponent}`]: {
    '& .btn.btn:not(.editRow):not(.removeRow)': {
      backgroundColor: `${theme.colors.uIBase} !important`,
      color: theme.colors.textAlternatePrimary,
      '&:hover:not([disabled])': {
        background: theme.colors.uIGradient2,
        color: theme.colors.textMainPrimary,
      },
      '&:disabled': {
        backgroundColor: `${theme.colors.uIBase4} !important`,
      },
    },
  },
  [`div.${COMPONENT_CLASSES.buttonSecondaryComponent}`]: {
    ...outlinedSecondaryStyles(theme.colors.uIBase, theme.colors.layoutBackgroundPrimary),
    width: 'fit-content',
    cursor: 'pointer',
    color: theme.colors.textMainPrimary,
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box, border-box',
    padding: 0,
    borderStyle: 'solid',
    borderRadius: 40,
    '&:hover': {
      ...outlinedSecondaryStyles(theme.colors.uIGradient1, theme.colors.layoutBackgroundPrimary, true),
    },
    '&:disabled': {
      ...outlinedSecondaryStyles(theme.colors.uIBase4, theme.colors.layoutBackgroundPrimary),
    },
    '& .btn.btn:not(.editRow):not(.removeRow)': {
      background: `${theme.colors.layoutBackgroundPrimary} !important`,
      padding: `${theme.spacing(2) - 2}px ${theme.spacing(5)}px`,
      color: theme.colors.uIBase,
    },
  },
  [`.btn.${COMPONENT_CLASSES.buttonCancelComponent}`]: {
    backgroundColor: `${theme.colors.layoutBackgroundPrimary} !important`,
    color: `${theme.colors.textMainPrimary} !important`,
    border: 'none !important',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:before': {
      content: `url(${cancelIcon})`,
      position: 'relative',
      top: 3,
      left: `-${theme.spacing(1)}px`,
    },

    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '2px',
      '&:before': {
        content: `url(${cancelHoverIcon})`,
      },
    },

    '&:focus': {
      boxShadow: 'none',
    },

    '& .button-icon-right': {
      display: 'none',
    },
  },
}) as Record<string, unknown>;

export default (theme: Theme) => createStyles({
  '@global': createButtonStyles(theme),
});
