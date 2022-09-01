import { createStyles, Theme } from '@material-ui/core/styles';
import { spacing } from 'styles/constants';

const styles = ({ colors }: Theme) => createStyles({
  cell: {
    borderBottom: `2px solid ${colors.uIBase}`,
    '&:first-child': {
      paddingLeft: 0,
    },
    '&:last-child': {
      paddingRight: 0,
    },
  },
  sortIcon: {
    width: spacing * 2,
    height: spacing * 2,
    marginLeft: spacing,
    color: 'inherit !important',
    '&:hover': {
      color: colors.textMainPrimary,
    },
  },
  label: {
    color: colors.textMainSecondary,
    '&$activeLabel': {
      color: colors.textMainSecondary,
    },
    '&:hover': {
      color: colors.textMainPrimary,
      '& $sortIcon': {
        opacity: 1,
      },
    },
  },
  activeLabel: {},
});

export default styles;
