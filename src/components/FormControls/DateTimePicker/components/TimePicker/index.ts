import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './TimePicker.styles';
import DateTimePicker, { TimePickerProps } from './TimePicker';

export default withStyles(styles)(DateTimePicker) as React.ComponentClass<TimePickerProps>;
