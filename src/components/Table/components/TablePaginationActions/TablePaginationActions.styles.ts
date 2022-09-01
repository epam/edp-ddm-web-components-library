import { createStyles, Theme } from '@material-ui/core/styles';

const styles = ({ colors }: Theme) => createStyles({
  root: {
    flexShrink: 0,
  },
  button: {
    color: colors.textMainPrimary,
  },
});

export default styles;
