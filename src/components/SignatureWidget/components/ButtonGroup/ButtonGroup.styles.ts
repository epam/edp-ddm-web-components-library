import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  root: {
    marginTop: theme.spacing(8),
  },
  buttonGroup: {
    marginTop: theme.spacing(3.75),
  },
  button: {
    marginBottom: theme.spacing(3),
  },
  inline: {
    display: 'grid',
    gridTemplateColumns: 'repeat( auto-fit, minmax(100px, 1fr))',
    alignItems: 'center',
  },
});

export default styles;
