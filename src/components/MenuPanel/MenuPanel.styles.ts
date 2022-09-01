import { createStyles, Theme } from '@material-ui/core/styles';
import { h3 } from 'styles';

import { spacing } from 'styles/constants';

const menuPanelStyles = ({ colors }: Theme) => createStyles({
  root: {
    marginTop: spacing * 2,
    marginBottom: spacing * 4,
  },
  title: {
    marginTop: spacing * 2,
    marginBottom: spacing * 3,
  },
  description: {
    marginBottom: spacing,
  },
  link: {
    color: colors.textMainPrimary,
    wordBreak: 'break-word',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationThickness: '2px',
    },
    '&:hover $linkIcon': {
      visibility: 'visible',
    },
    '& svg': {
      fill: colors.uIBase,
    },
  },
  linkIcon: {
    visibility: 'hidden',
    float: 'right',
  },
  buttonLink: {
    ...h3,
    background: 'none!important',
    border: 'none',
    padding: '0!important',
    cursor: 'pointer',
    fontStyle: 'normal',
    fontWeight: 'normal',
    width: '100%',
    textAlign: 'left',
    '&:focus': {
      outline: 'none',
    },
  },
});

export default menuPanelStyles;
