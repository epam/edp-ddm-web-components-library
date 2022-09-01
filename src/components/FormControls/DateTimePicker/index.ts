import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './DateTimePicker.styles';
import DateTimePicker, { DateTimePickerProps } from './DateTimePicker';

export default withStyles(styles)(DateTimePicker) as React.ComponentClass<DateTimePickerProps>;
