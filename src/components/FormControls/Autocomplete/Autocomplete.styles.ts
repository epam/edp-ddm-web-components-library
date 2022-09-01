import { createStyles, Theme } from '@material-ui/core/styles';
import { spacing } from 'styles';

const SELECT_ICONS_WIDTH = 40;

const styles = (theme: Theme) => createStyles({
  chip: {
    marginRight: spacing,
    marginTop: spacing,
    marginBottom: spacing,
    background: theme.colors.uIBase6,
    color: theme.colors.textMainPrimary,
    height: spacing * 3,
    '&:hover': {
      backgroundColor: theme.colors.uIBlueBackground,
    },
    maxWidth: `calc(100% - ${SELECT_ICONS_WIDTH}px)`,
  },
  listbox: {
    margin: spacing,
    background: theme.colors.dropmenuBackground,
    '& [aria-selected="true"]': {
      backgroundColor: theme.colors.dropmenuSelected,
    },
  },
  popupIndicator: {
    width: SELECT_ICONS_WIDTH,
    height: SELECT_ICONS_WIDTH,
    '& path': {
      fill: theme.colors.uIIconBase,
    },
    '&:hover': {
      backgroundColor: theme.colors.uIIconHoverArea,
    },
    '&:disabled path': {
      fill: theme.colors.uIIconDisabled,
    },
    '&&': {
      borderRadius: '50%',
    },
  },
  endAdornment: {
    top: `calc(50% - ${spacing * 3}px)`,
  },
  clearIndicator: {
    width: SELECT_ICONS_WIDTH,
    height: SELECT_ICONS_WIDTH,
    '&:hover': {
      backgroundColor: theme.colors.uIIconHoverArea,
    },
    '&&': {
      borderRadius: '50%',
    },
  },
  popupIndicatorOpen: {
    transform: 'none',

    '& svg': {
      transform: 'rotate(180deg)',
    },
  },
  deleteIcon: {
    lineHeight: 'inherit',
    width: spacing * 3,
    height: spacing * 3,
    '&:hover': {
      backgroundColor: theme.colors.uIIconHoverArea,
    },
    '&&': {
      borderRadius: '50%',
    },
  },
  popper: {
    zIndex: 10005,
  },
  paper: {
    background: theme.colors.dropmenuBackground,
    '& ul': {
      background: theme.colors.dropmenuBackground,
      '& li:hover': {
        background: theme.colors.dropmenuHover,
      },
    },
  },
  inputRoot: {
    '&&&': {
      paddingRight: spacing * 10,
    },
  },
});

export default styles;
