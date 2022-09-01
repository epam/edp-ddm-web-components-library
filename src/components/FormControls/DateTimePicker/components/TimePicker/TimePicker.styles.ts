import { createStyles } from '@material-ui/core';
import {
  spacing,
  smallText,
} from 'styles';

const styles = () => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: spacing * 2,
    paddingBottom: spacing * 2,
  },
  separator: {
    display: 'inline-block',
    paddingLeft: spacing,
    paddingRight: spacing,
  },
  inputText: {
    ...smallText,
    textAlign: 'center',
  },
  input: {
    '&:before': {
      border: 'none',
    },
  },
});

export default styles;
