import { createStyles, Theme } from '@material-ui/core/styles';
import { spacing } from 'styles';

const styles = ({ colors }: Theme) => createStyles({
  root: {
    background: colors.uIBase6,
    paddingTop: spacing * 3,
    paddingBottom: spacing * 3,
    paddingLeft: spacing * 4,
    paddingRight: spacing * 4,
  },
  box: {
    marginTop: spacing * 2,
  },
  title: {
    color: colors.textMainSecondary,
    marginBottom: spacing / 2,
  },
});

export default styles;
