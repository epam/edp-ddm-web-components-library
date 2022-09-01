import { createStyles, Theme } from '@material-ui/core/styles';
import {
  tinyText,
  spacing,
  bodyText,
} from 'styles';

const styleBorderBottom = (color: string) => ({
  borderBottom: `2px solid ${color} !important`,
});

const styleTextCase = (value: string) => ({
  '& input, textarea': {
    ...bodyText,
    textTransform: value,

    '&::placeholder': {
      ...bodyText,
      textTransform: 'none',
    },
  },
});

const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
    ...styleTextCase('none'),
    '& input[type=number]': {
      MozAppearance: 'textfield',
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '& input[autocomplete=on]:-webkit-autofill':  {
      WebkitBoxShadow: `0 0 0 30px ${theme.colors.layoutBackgroundPrimary} inset !important`,
      WebkitTextFillColor: theme.colors.textMainPrimary,
    },
  },
  input: {
    paddingBottom: spacing,
    paddingTop: spacing,
    color: theme.colors.textMainPrimary,
  },
  label: {
    ...tinyText,
    color: `${theme.colors.textMainSecondary} !important`,
    height: spacing * 2,
    padding: 0,
  },
  labelState: {
    '&$label': {
      color: theme.colors.textMainSecondary,
    },
  },
  underline: {
    '&:after': {
      display: 'none',
    },
    '&&:before': {
      ...styleBorderBottom(theme.colors.textMainPrimary),
    },
    '&&:hover:before': {
      ...styleBorderBottom(theme.colors.textMainPrimary),
    },
    '&.Mui-disabled:before': {
      borderBottom: `2px solid ${theme.colors.uIBase4}!important`,
    },
  },
  focused: {
    '&:before': {
      borderBottom: '2px solid !important',
      borderImage: theme.colors.uIGradient1,
      borderImageSlice: 1,
    },
  },
  error: {
    '&&:before': {
      ...styleBorderBottom(theme.colors.uIRedBase),
    },
    '&&:hover:before': {
      ...styleBorderBottom(theme.colors.uIRedBase),
    },
  },
  disabled: {
    color: theme.colors.textMainSecondary,
    '&&:before': {
      ...styleBorderBottom(theme.colors.uIBase4),
    },
    '&&:hover:before': {
      ...styleBorderBottom(theme.colors.uIBase4),
    },
  },
  textUppercase: {
    ...styleTextCase('uppercase'),
  },
  textLowercase: {
    ...styleTextCase('lowercase'),
  },
  displayNone: {
    '&&': { display: 'none' },
  },
  autoExpandNone: {
    '&&': {
      resize: 'none',
      overflowY: 'hidden',
    },
  },
  autoExpandVertical: {
    resize: 'vertical',
  },
});

export default styles;
