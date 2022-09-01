import { createStyles, Theme } from '@material-ui/core/styles';

const styles = ({ colors }: Theme) => createStyles({
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',

    '& span': {
      marginLeft: 10,
    },

    '& svg': {
      fill: colors.uIIconBase,
    },
  },
});

export default styles;
