import { createStyles, Theme } from '@material-ui/core/styles';

const styles = ({ colors }: Theme) => createStyles({
  root: {
    display: 'inline-flex',
    '& path': {
      fill: colors.uIBase,
    },
  },
});

export default styles;
