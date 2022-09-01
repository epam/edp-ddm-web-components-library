import { createStyles, Theme } from '@material-ui/core/styles';

const styles = ({ colors }: Theme) => createStyles({
  calendarIcon: {
    '& path': {
      fill: colors.uIBase,
    },
  },
});

export default styles;
