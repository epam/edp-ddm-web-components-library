import { createStyles, Theme } from '@material-ui/core/styles';
import {
  h7, h8, spacing,
} from 'styles';

const styles = ({ colors }: Theme) => createStyles({
  link: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& svg': {
      fill: colors.uIIconBase,
    },
  },
  mediumPadding: {
    padding: `0 ${spacing}px`,
  },
  iconMargin: {
    marginLeft: spacing,
  },
  text: {
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
  small: {
    ...h8,
  },
  medium: {
    ...h7,
  },
  disabled: {
    opacity: 0.25,
    cursor: 'default',
  },
});

export default styles;
