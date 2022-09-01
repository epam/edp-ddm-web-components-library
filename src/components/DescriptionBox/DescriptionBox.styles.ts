import { createStyles, Theme } from '@material-ui/core';
import {
  tinyText,
  spacing,
} from 'styles';

const styles = (theme: Theme) => createStyles({
  descriptionBox: {
    ...tinyText,
    display: 'flex',
    color: `${theme.colors.textMainPrimary} !important`,
    backgroundColor: theme.colors.uIYellowBackground,
    marginTop: spacing,
    paddingTop: spacing / 2,
    paddingBottom: spacing / 2,
    paddingLeft: spacing,
    paddingRight: spacing,
  },
});

export default styles;
