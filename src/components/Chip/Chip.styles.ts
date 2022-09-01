import { createStyles, Theme } from '@material-ui/core/styles';
import { spacing, smallText } from 'styles';

const styles = (theme: Theme) => createStyles({
  chip: {
    display: 'inline-flex',
    alignItems: 'center',
    border: '2px solid',
    borderColor: theme.colors.uIBlueBase2,
    padding: `${spacing * 1.5}px ${spacing * 3}px`,
    boxSizing: 'border-box',
    borderRadius: 20,
    height: 40,

    '&:hover': {
      backgroundColor: theme.colors.uIBlueBackground,
      cursor: 'pointer',
    },
  },
  selected: {
    backgroundColor: theme.colors.uIBlueBase2,
    pointerEvents: 'none',
  },
  disabled: {
    borderColor: theme.colors.uIBase4,
    pointerEvents: 'none',
    '& span': {
      opacity: '0.5',
    },
    '& $title': {
      opacity: '0.25',
    },
    '&:hover': {
      backgroundColor: theme.colors.layoutBackgroundPrimary,
      cursor: 'default',
    },
  },
  title: {
    ...smallText,
    color: theme.colors.textMainPrimary,
    marginLeft: spacing,
  },
});

export default styles;
