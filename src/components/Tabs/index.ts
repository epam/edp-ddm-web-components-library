import { withStyles } from '@material-ui/core';

import styles from './Tabs.styles';
import Tabs from './Tabs';
import TabPanel from './components/TabPanel';

export { TabPanel };

export default withStyles(styles)(Tabs);
