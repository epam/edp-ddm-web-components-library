import { Theme, createStyles } from '@material-ui/core/styles';
import { spacing } from 'styles';

const styles = (theme: Theme) => createStyles({
  root: {
    border: '2px solid',
    borderImage: theme.colors.uIGradient3,
    padding: `${spacing * 3}px ${spacing * 4}px`,
  },
});

export default styles;
