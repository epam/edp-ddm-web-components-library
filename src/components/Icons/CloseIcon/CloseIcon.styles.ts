import { createStyles, Theme } from '@material-ui/core/styles';

const styles = ({ colors }: Theme) => createStyles({
  closeIcon: {
    '& svg': {
      fill: colors.uIIconBase,
      verticalAlign: 'middle',
      lineHeight: 'inherit',
    },
  },
});

export default styles;
