import { createStyles, Theme } from '@material-ui/core/styles';
import type { DividerProps } from './Divider';

const styles = (theme: Theme) => createStyles({
  root: ({ color }: DividerProps) => ({
    height: '2px',
    background: color || theme.colors.uIBase,
  }),
});

export default styles;
