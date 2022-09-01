import { createStyles, Theme } from '@material-ui/core/styles';
import { bodyText, spacing, smallText } from 'styles';

const styles = ({ colors }: Theme) => createStyles({
  root: {
    ...bodyText,
    width: '100%',
    display: 'inline-block',
    margin: `${spacing / 2}px 0`,
    whiteSpace: 'nowrap',
    padding: `${spacing * 2}px ${spacing}px`,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: colors.textMainPrimary,
    '&:hover': {
      backgroundColor: colors.dropmenuHover,
    },
  },
  small: {
    ...smallText,
    padding: `${spacing}px`,
  },
  plain: {
    pointerEvents: 'none',
    cursor: 'default',
  },
});

export default styles;
