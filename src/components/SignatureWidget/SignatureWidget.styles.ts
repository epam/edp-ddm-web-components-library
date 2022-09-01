import { createStyles } from '@material-ui/core';
import { spacing } from 'styles/constants';
import { darkTheme } from 'styles/themes/darkTheme';

const styles = () => createStyles({
  button: {
    marginRight: spacing * 3,
  },
  frameContainer: {
    height: spacing * 50,
    background: darkTheme.colors.uIBase,
  },
  hide: {
    display: 'none',
  },
  keyInfo: {
    border: '2px solid',
    padding: `${spacing * 3}px ${spacing * 4}px`,
  },
  buttonContainer: {
    marginTop: spacing * 7,
    marginBottom: spacing * 7,
    display: 'flex',
  },
  title: {
    margin: `${spacing * 5}px 0`,
  },
  name: {
    marginBottom: spacing * 3,
  },
  caption: {
    opacity: 0.5,
  },
  gutterBottom: {
    marginBottom: spacing * 2,
  },
});

export default styles;
