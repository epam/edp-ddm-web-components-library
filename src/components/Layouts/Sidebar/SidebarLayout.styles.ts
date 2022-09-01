import { createStyles, Theme } from '@material-ui/core/styles';
import { spacing } from 'styles/constants';

const sidebarContainerWidth = 48 * spacing;

const styles = ({ colors }: Theme) => createStyles({
  title: {
    marginTop: spacing * 8,
    marginBottom: spacing * 4,
  },
  mainContainer: {
    paddingRight: spacing * 4,
    paddingLeft: spacing * 4,
    flexGrow: 1,
    maxWidth: `calc(100% - ${sidebarContainerWidth}px)`,
  },
  sidebarContainer: {
    width: sidebarContainerWidth,
    backgroundColor: colors.layoutBackgroundSecondary,
    padding: spacing * 4,
    paddingRight: spacing * 8,
    paddingTop: spacing * 28,
    minHeight: '100vh',
  },
});

export default styles;
