import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  paper: {
    padding: theme.spacing(7),
    backgroundColor: theme.colors.layoutBackgroundPrimary,
  },
});

export default styles;
