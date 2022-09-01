import { createStyles, Theme } from '@material-ui/core';

const styles = ({ colors, spacing }: Theme) => createStyles({
  root: {
    textAlign: 'right',
    marginRight: `-${spacing(2)}px`,

    '& button': {
      margin: 0,
    },
  },
  menuItem: {
    margin: 0,
    padding: spacing(1),
  },
  menuItemDelete: {
    color: colors.uIRedBase,
    '&:hover': {
      backgroundColor: colors.uIRedBackground,
    },
  },
  menuList: {
    width: spacing(25),
    minWidth: spacing(25),
  },
  line: {
    margin: `${spacing(2)}px 0`,
    height: 2,
    backgroundColor: colors.uIBase4,
    border: 'none',
  },
});

export default styles;
