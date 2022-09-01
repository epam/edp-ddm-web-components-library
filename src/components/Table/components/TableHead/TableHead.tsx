import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import MuiTableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import React from 'react';

import Typography from 'components/Typography';
import { ColumnDefinition, Order } from 'types/table';
import { createXPathParam } from 'utils/xPath';
import styles from './TableHead.styles';

interface Props {
  columnDefinitions: ColumnDefinition[],
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  order: Order;
  orderField: string;
  'data-xpath'?: string
}

const useStyles = makeStyles(styles, { name: 'TableHead' });

export default function TableHead(props: Props) {
  const {
    order, orderField, onRequestSort, columnDefinitions, 'data-xpath': dataXpath,
  } = props;
  const classes = useStyles();
  const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <MuiTableHead>
      <TableRow>
        {columnDefinitions.map((definition) => (
          <TableCell
            key={definition.property}
            sortDirection={orderField === definition.property ? order : false}
            classes={{ root: classes.cell }}
            data-xpath={createXPathParam(dataXpath, definition.property)}
          >
            {
              definition.sortable !== false ? (
                <TableSortLabel
                  active={orderField === definition.property}
                  direction={orderField === definition.property ? order : Order.asc}
                  onClick={createSortHandler(definition.property)}
                  classes={{ active: classes.activeLabel, root: classes.label, icon: classes.sortIcon }}
                >
                  <Typography variant="h8">
                    {definition.title}
                  </Typography>
                </TableSortLabel>
              ) : (
                <Typography variant="h8" className={classes.label}>
                  {definition.title}
                </Typography>
              )
            }
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
}
