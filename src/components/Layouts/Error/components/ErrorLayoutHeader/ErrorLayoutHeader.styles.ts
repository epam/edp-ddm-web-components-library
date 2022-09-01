import { createStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  container: {
    backgroundColor: theme.colors.layoutBackgroundPrimary,
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});

export default styles;
