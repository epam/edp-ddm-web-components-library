import { createStyles, Theme } from '@material-ui/core/styles';
import { spacing } from 'styles';

const styles = ({ colors }: Theme) => createStyles({
  root: {
    zIndex: 0,
  },
  active: {
    borderImage: colors.uIGradient1,
    borderImageSlice: 1,
    borderBottomStyle: 'solid',
    borderBottomWidth: '2px',
  },
  nameBox: {
    paddingBottom: 2,
    paddingRight: spacing / 2,
    marginBottom: '-2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '2px solid transparent',
    '&:hover': {
      borderBottom: `2px solid ${colors.uIBase}`,
    },
    '& svg': {
      fill: colors.uIBase,
    },
  },
  name: {
    marginRight: spacing,
  },
  btn: {
    '&:hover': {
      '& button': {
        backgroundColor: 'transparent',
      },
    },
  },
});

export default styles;
