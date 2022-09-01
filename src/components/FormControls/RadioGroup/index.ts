import { withStyles } from '@material-ui/core';

import styles from './RadioGroup.styles';
import RadioGroup, { RadioGroupProps } from './RadioGroup';

export default withStyles(styles)(RadioGroup) as React.ComponentClass<RadioGroupProps>;
