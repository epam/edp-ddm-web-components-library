import { createStyles, Theme } from '@material-ui/core/styles';
import { spacing } from 'styles/constants';
import type { NavbarProps } from './Navbar';

const styles = ({ colors }: Theme) => createStyles({
  root: {
    height: 10 * spacing,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  appBar: {
    height: '100%',
    zIndex: 0,
    boxShadow: 'none',
  },
  appBarColorPrimary: ({ disableBackground: isBackgroundPrimary = false }: NavbarProps) => ({
    backgroundColor: colors[isBackgroundPrimary ? 'layoutBackgroundPrimary' : 'layoutBackgroundSecondary'],
    color: colors.textMainPrimary,
  }),
});

export default styles;
