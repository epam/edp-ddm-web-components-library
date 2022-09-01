import { createStyles, Theme } from '@material-ui/core/styles';
import { spacing } from 'styles';
import type { Props } from './HomeButton';

const styles = ({ colors }: Theme) => createStyles({
  logo: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: spacing * 2,
    paddingBottom: spacing * 2,
    '& svg': {
      fill: colors.uIBase,
    },
  },
  title: ({ direction }: Props) => {
    const isRight = direction === 'right';
    return {
      marginLeft: isRight ? 0 : spacing,
      textAlign: isRight ? 'right' : 'left',
      marginRight: isRight ? spacing : 0,
      flexGrow: 1,
      maxWidth: spacing * 22,
    };
  },
});

export default styles;
