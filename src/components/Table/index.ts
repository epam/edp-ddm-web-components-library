import { WithStyles, withStyles } from '@material-ui/core';
import React from 'react';
import styles from './Table.styles';
import Table, { TableProps } from './Table';

interface Props extends TableProps {
  classes?: Partial<WithStyles<typeof styles>['classes']>;
}

export { ROWS_PER_PAGE_OPTIONS } from './constants';
export default withStyles(styles)(Table) as React.ComponentClass<Props>;
