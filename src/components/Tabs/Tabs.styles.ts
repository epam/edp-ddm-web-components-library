import { createStyles, Theme } from '@material-ui/core';
import { spacing } from 'styles/constants';
import type { TabsProps } from './Tabs';

const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
  tabs: {
    minHeight: 'auto',
    backgroundColor:
({ disableBackground = false }: TabsProps) => (disableBackground
  ? undefined : theme.colors.layoutBackgroundSecondary),

    '& .Mui-selected': {
      color: theme.colors.textMainPrimary,
      borderBottom: `2px solid ${theme.colors.uIBase}`,
    },
  },
  tabRoot: {
    color: theme.colors.textMainSecondary,
    textTransform: 'none',
    padding: 0,
    marginRight: spacing * 4,
    minWidth: 'auto',
    minHeight: 'auto',
    borderBottom: '2px solid transparent',
    '&:hover': {
      opacity: 1,
      color: theme.colors.textMainPrimary,
      borderBottom: `2px solid ${theme.colors.uIBase}`,
    },
  },
  indicator: {
    display: 'none',
  },
  largeSize: {
    padding: `${spacing + 2}px 0`,
  },
  mediumSize: {
    padding: `${spacing - 2}px 0`,
  },
  smallSize: {
    padding: `${spacing - 6}px 0`,
  },
});

export default styles;
