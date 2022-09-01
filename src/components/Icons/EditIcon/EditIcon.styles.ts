import { createStyles, Theme } from '@material-ui/core/styles';

const styles = ({ colors }: Theme) => createStyles({
  editIcon: {
    '& svg': {
      fill: colors.uIIconBase,
    },
  },
});

export default styles;
