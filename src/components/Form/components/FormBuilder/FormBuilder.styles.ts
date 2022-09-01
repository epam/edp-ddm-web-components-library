import { createStyles } from '@material-ui/core';

const styles = () => createStyles({
  container: {
    '& .form-builder-group-header': {
      paddingLeft: 0,
      paddingRight: 0,
    },
    '& .builder-group-button': {
      whiteSpace: 'nowrap',
    },
  },
});

export default styles;
