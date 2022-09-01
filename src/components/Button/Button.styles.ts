import { createStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { spacing } from 'styles/constants';
import { h7, h8 } from 'styles';

export const outlinedSecondaryStyles = (
  gradient: string,
  layoutBackgroundPrimaryColor: string,
  isCssFunc?: boolean,
) => ({
  borderWidth: 2,
  borderColor: 'transparent',
  backgroundImage: `linear-gradient(${layoutBackgroundPrimaryColor}, ${layoutBackgroundPrimaryColor}), 
  ${isCssFunc ? gradient : `linear-gradient(to right, ${gradient}, ${gradient})`}`,
});

const styles = (theme: Theme) => createStyles({
  root: {
    ...h7,
    textTransform: 'none',
    borderRadius: spacing * 5,
    padding: '16px 40px',
    boxShadow: 'none',
  },
  containedPrimary: {
    backgroundColor: theme.colors.uIBase,
    color: theme.colors.textAlternatePrimary,
    '&:hover': {
      background: theme.colors.uIGradient2,
      color: theme.colors.textMainPrimary,
      boxShadow: 'none',
    },
    '&:disabled': {
      color: theme.colors.textAlternatePrimary,
      backgroundColor: theme.colors.uIBase4,
    },
  },
  outlinedSecondary: {
    ...outlinedSecondaryStyles(theme.colors.uIBase, theme.colors.layoutBackgroundPrimary),
    padding: 0,
    color: theme.colors.textMainPrimary,
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box, border-box',
    '&:hover': {
      ...outlinedSecondaryStyles(theme.colors.uIGradient1, theme.colors.layoutBackgroundPrimary, true),
    },
    '&:disabled': {
      ...outlinedSecondaryStyles(theme.colors.uIBase4, theme.colors.layoutBackgroundPrimary),
    },
    '& span': {
      padding: '14px 40px',
    },
  },
  sizeSmall: {
    ...h8,
    padding: '12px 28px',
  },
  outlinedSizeSmall: {
    padding: 0,
    '& span': {
      padding: '10px 28px',
    },
  },
  text: {
    padding: 0,
    borderRadius: 0,
    '&:hover': {
      backgroundColor: theme.colors.uIBlueBackground,
    },
  },
  iconSizeSmall: {
    padding: theme.spacing(1),

    '&:hover': {
      backgroundColor: theme.colors.layoutBackgroundPrimary,
      textDecoration: 'underline',
      textUnderlineOffset: '2px',

      '& path': {
        fill: theme.colors.uIBase,
        fillOpacity: 1,
      },
    },
  },
});

export default styles;
