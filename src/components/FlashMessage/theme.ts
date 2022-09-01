import zIndex from '@material-ui/core/styles/zIndex';
import { Theme } from 'reapop';
import { spacing } from 'styles';

const theme: Theme = {
  container: () => ({
    position: 'fixed',
    top: 100,
    right: spacing * 4,
    zIndex: zIndex.snackbar,
  }),
  notification: () => ({}),
  notificationDismissIcon: () => ({}),
  notificationIcon: () => ({}),
  notificationImageContainer: () => ({}),
  notificationImage: () => ({}),
  notificationMeta: () => ({}),
  notificationTitle: () => ({}),
  notificationMessage: () => ({}),
  notificationButtons: () => ({}),
  notificationButton: () => ({}),
  notificationButtonText: () => ({}),
};
export default theme;
