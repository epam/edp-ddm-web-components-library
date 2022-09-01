import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './Checkbox.styles';
import { Checkbox, CheckboxProps } from './Checkbox';

export default withStyles(styles)(Checkbox) as React.ComponentClass<CheckboxProps>;
