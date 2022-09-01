import { createStyles, Theme } from '@material-ui/core/styles';
import { spacing } from 'styles';

import type { Props } from './Container';

const styles = (theme: Theme) => createStyles({
  root: (props: Props) => ({
    backgroundColor: theme.colors.layoutBackgroundPrimary,
    [theme.breakpoints.up('md')]: {
      paddingLeft: props.noPadding ? 0 : spacing * 4,
      paddingRight: props.noPadding ? 0 : spacing * 4,
    },
  }),
});

export default styles;
