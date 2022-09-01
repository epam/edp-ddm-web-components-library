import { createStyles } from '@material-ui/core';
import { shadows } from 'styles/constants';

const styles = () => createStyles({
  paper: {
    boxShadow: shadows.primary,
    borderRadius: 2,
  },
});

export default styles;
