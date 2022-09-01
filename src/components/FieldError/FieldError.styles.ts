import { createStyles, Theme } from '@material-ui/core';
import {
  tinyText,
  spacing,
} from 'styles';

const styles = (theme: Theme) => createStyles({
  textError: {
    ...tinyText,
    color: theme.colors.textErrors,
    marginLeft: 5,
  },
  errorBox: {
    display: 'flex',
    marginTop: spacing,
    '& svg': {
      fill: theme.colors.uIRedBase,
    },
  },
});

export default styles;
