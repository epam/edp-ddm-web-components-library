import { createStyles, Theme } from '@material-ui/core/styles';
import zIndex from '@material-ui/core/styles/zIndex';
import {
  bodyText,
  h5,
  h7,
  h8,
  shadows,
  spacing,
} from 'styles';

const styles = (theme: Theme) => createStyles({
  root: {
    ...h8,
    display: 'flex',
    borderRadius: 2,
    padding: spacing * 2,
    marginBottom: spacing * 3,
    position: 'relative',
    zIndex: zIndex.snackbar,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  alignCenter: {
    alignItems: 'center',
  },
  plain: {
    padding: spacing * 3,
    '& $title': {
      ...h5,
    },
    '& $message': {
      marginTop: spacing * 1.5,
    },
  },
  plainMessage: {
    ...bodyText,
  },
  notification: {
    boxShadow: shadows.notification,
    width: 392,
  },
  error: {
    backgroundColor: theme.colors.uIRedBackground,
  },
  warning: {
    backgroundColor: theme.colors.uIYellowBackground,
  },
  success: {
    backgroundColor: theme.colors.uIGreenBackground,
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: spacing * 2,
  },
  title: {
    ...h7,
  },
  message: {
    marginTop: spacing,
  },
  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    background: 'none',
    border: 'none',
    outline: 'none',
    margin: '-8px -8px 0 0',
    '&:hover': {
      cursor: 'pointer',
      background: theme.colors.uIIconHoverArea,
      borderRadius: '50%',
    },
  },
});

export default styles;
