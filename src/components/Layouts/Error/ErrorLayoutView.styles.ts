import { createStyles, Theme } from '@material-ui/core/styles';
import { spacing, h7 } from 'styles';

const styles = ({ colors }: Theme) => createStyles({
  title: {
    marginTop: spacing * 10,
    marginBottom: spacing * 6,
  },
  fixedWidthContent: {
    maxWidth: spacing * 80,
  },
  message: {
    marginBottom: spacing * 3,
  },
  description: {
    marginBottom: spacing * 3,
    color: colors.textMainSecondary,
  },
  button: {
    marginTop: spacing * 6,
  },
  backLink: {
    marginTop: spacing * 3,
  },
  backTitle: {
    ...h7,
    marginLeft: spacing,
  },
});

export default styles;
