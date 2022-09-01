import { createStyles, Theme } from '@material-ui/core/styles';
import { spacing, h7 } from 'styles';

const styles = (theme: Theme) => createStyles({
  root: {
    padding: spacing,
    marginRight: spacing,
    color: theme.colors.textMainPrimary,
    '&:hover': {
      backgroundColor: theme.colors.uIIconHoverArea,
    },
  },
  label: {
    ...h7,
    display: 'inline-block',
    marginLeft: 0,
    marginBottom: spacing,
    marginTop: spacing / 2,
    paddingBottom: spacing / 2,
    paddingTop: spacing / 2,
    color: theme.colors.textMainPrimary,
    '& .Mui-disabled': {
      color: theme.colors.textMainSubtle,
    },
  },
});

export default styles;
