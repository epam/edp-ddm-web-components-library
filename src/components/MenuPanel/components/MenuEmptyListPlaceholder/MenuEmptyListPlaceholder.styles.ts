import { createStyles, Theme } from '@material-ui/core/styles';
import { spacing } from 'styles/constants';

const styles = ({ colors }: Theme) => createStyles({
  title: {
    marginTop: spacing * 10,
    marginBottom: spacing * 2,
  },
  message: {
    marginBottom: spacing * 2,
  },
  description: {
    color: colors.textMainSecondary,
  },
});

export default styles;
