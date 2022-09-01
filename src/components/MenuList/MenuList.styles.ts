import { createStyles, Theme } from '@material-ui/core/styles';
import { spacing } from 'styles';

const styles = ({ colors }: Theme) => createStyles({
  root: {
    padding: spacing,
    background: colors.dropmenuBackground,
    minWidth: spacing * 35,
    maxWidth: spacing * 50,
  },
});

export default styles;
