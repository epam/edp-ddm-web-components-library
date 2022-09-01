import React from 'react';
import type { WithStyles } from '@material-ui/core';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { LabelDisplayedRowsArgs, TablePagination } from '@material-ui/core';
import { TablePaginationActionsProps } from '@material-ui/core/TablePagination/TablePaginationActions';
import orderBy from 'lodash/orderBy';
import uniqueId from 'lodash/uniqueId';
import isNumber from 'lodash/isNumber';
import clsx from 'clsx';

import {
  AriaLabel,
  ColumnDefinition,
  ListItem,
  Order,
  XPathTable,
  XPathTablePagination,
  FilterParams,
} from 'types/table';
import { createXPathParam } from 'utils/xPath';
import Typography from 'components/Typography';
import FolderIcon from 'components/Icons/FolderIcon';
import TextCell from './Cells/TextCell';
import { ROWS_PER_PAGE_OPTIONS } from './constants';
import TableHead from './components/TableHead';
import TablePaginationActions from './components/TablePaginationActions';
import type styles from './Table.styles';

export interface TableProps {
  columnDefinitions: ColumnDefinition[],
  list: ListItem[],
  hideEmptyPlaceholder?: boolean,
  emptyPlaceholder?: string,
  emptyPlaceholderIcon?: string | JSX.Element,
  emptyPlaceholderInline?: boolean;
  order?: Order,
  orderField?: string,
  onOrderChange?: (orderField: string, order: Order) => void;
  header: {
    'data-xpath'?: string
  };
  onFilterChange?: (filterPrams: FilterParams) => void;
  pagination: {
    getDisplayedRowsLabel?: (params: { from: number, to: number, count?: number }) => string;
    labelRowsPerPage?: string;
    ariaLabel?: AriaLabel;
    page?: number;
    rowsPerPage?: number;
    totalItems?: number;
    hidePaginationControls?: boolean;
    'data-xpath'?: XPathTablePagination;
  };
  'data-xpath'?: XPathTable,
  dataXpathTableRowPropName?: string,
}

export interface Props extends WithStyles<typeof styles>, TableProps {}

interface State {
  page: number,
  rowsPerPage: number,
  order: Order,
  orderField: string,
}

export default class Table extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { page: pageProps, rowsPerPage: rowsPerPageProps } = props.pagination;

    this.state = {
      order: Order.asc,
      orderField: '',
      page: pageProps || 0,
      rowsPerPage: rowsPerPageProps || ROWS_PER_PAGE_OPTIONS[0],
    };
  }

  getOrder = () => {
    const { order: orderProps } = this.props;
    const { order: orderState } = this.state;
    return orderProps || orderState;
  };

  getOrderField = () => {
    const { orderField: orderFieldProps } = this.props;
    const { orderField: orderFieldState } = this.state;
    return orderFieldProps || orderFieldState;
  };

  getPage = () => {
    const { page: pageProps } = this.props.pagination;
    const { page: pageState } = this.state;
    return pageProps || pageState;
  };

  getRowsPerPage = () => {
    const { rowsPerPage: rowsPerPageProps } = this.props.pagination;
    const { rowsPerPage: rowsPerPageState } = this.state;
    return rowsPerPageProps || rowsPerPageState;
  };

  handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
    const { onOrderChange, onFilterChange } = this.props;
    const order = this.getOrder();
    const orderField = this.getOrderField();
    const isAsc = orderField === property && order === Order.asc;
    const newOrder: Order = isAsc ? Order.desc : Order.asc;
    const rowsPerPage = this.getRowsPerPage();
    const page = this.getPage();

    if (onOrderChange || onFilterChange) {
      if (onOrderChange) { onOrderChange(property, newOrder); }
      if (onFilterChange) {
        onFilterChange({
          page,
          rowsPerPage,
          order: newOrder,
          orderField: property,
        });
      }
    } else {
      this.setState({
        order: newOrder,
        orderField: property,
      });
    }
  };

  handleChangePage = (event: unknown, page: number) => {
    const { onFilterChange } = this.props;

    if (onFilterChange) {
      const rowsPerPage = this.getRowsPerPage();
      const order = this.getOrder();
      const orderField = this.getOrderField();

      onFilterChange({
        page,
        rowsPerPage,
        order,
        orderField,
      });
    } else {
      this.setState({ page });
    }
  };

  handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rowsPerPage = parseInt(event.target.value, 10);
    const { onFilterChange } = this.props;
    const order = this.getOrder();
    const orderField = this.getOrderField();

    if (onFilterChange) {
      onFilterChange({
        page: 0,
        rowsPerPage,
        order,
        orderField,
      });
    } else {
      this.setState({
        page: 0,
        rowsPerPage,
      });
    }
  };

  getDisplayedRowsLabel = ({ from, to, count }: LabelDisplayedRowsArgs) => {
    const { classes, pagination: { getDisplayedRowsLabel = () => '' } } = this.props;
    const { list } = this.getListItem();

    return (
      <Typography variant="smallText" className={classes.paginationCaption} component="span">
        { getDisplayedRowsLabel({
          from,
          to: this.isTotalKnown() ? to : from + list.length - 1,
          count: this.isTotalKnown() ? count : undefined,
        }) }
      </Typography>
    );
  };

  isTotalKnown = () => {
    const { onFilterChange, pagination: { totalItems } } = this.props;

    return !(onFilterChange && !isNumber(totalItems));
  };

  calculateColumnDefinitionWidths = () => {
    const { columnDefinitions } = this.props;
    const totalWidthWeight = columnDefinitions.reduce((sum, cd) => {
      return sum + (isNumber(cd.width) ? cd.width : 0);
    }, 0);
    const widthWeightRatio = totalWidthWeight ? 100 / totalWidthWeight : 1;

    return columnDefinitions.map((cd) => {
      return {
        ...cd,
        width: isNumber(cd.width) ? `${cd.width * widthWeightRatio}%` : cd.width,
      };
    }) as ColumnDefinition[];
  };

  renderCell = (item: ListItem, columnDefinition: ColumnDefinition) => {
    const { classes } = this.props;
    const {
      property,
      height,
      Component = TextCell,
      cellClass,
    } = columnDefinition;

    return (
      <TableCell
        id={property}
        key={property}
        classes={{
          root: clsx(classes.cell, cellClass, height === 'large' && classes.cellLarge),
        }}
      >
        <Component item={item} columnDefinition={columnDefinition} />
      </TableCell>
    );
  };

  getOverThePageSizeCount = () => {
    const { list } = this.props;
    const rowsPerPage = this.getRowsPerPage();

    return list.length - rowsPerPage;
  };

  getListItem = () => {
    const { onFilterChange, list, pagination: { totalItems } } = this.props;
    const order = this.getOrder();
    const orderField = this.getOrderField();
    const page = this.getPage();
    const rowsPerPage = this.getRowsPerPage();
    const orderedList = orderBy(list, [orderField], [order]);
    const overPageSize = this.getOverThePageSizeCount();
    const controlledList = overPageSize > 0 ? orderedList.slice(0, -overPageSize) : orderedList;
    const controlledListTotal = this.isTotalKnown()
      ? totalItems
      : page * rowsPerPage + list.length;

    return {
      list: (onFilterChange
        ? controlledList
        : orderedList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)),
      totalItems: onFilterChange ? controlledListTotal : list.length,
    };
  };

  renderPlaceholder = () => {
    const {
      classes,
      emptyPlaceholder,
      emptyPlaceholderIcon = <FolderIcon />,
    } = this.props;
    return (
      <>
        <Typography variant="h3" component="span">
          <span role="img" aria-label="ok">{emptyPlaceholderIcon}</span>
        </Typography>
        <Typography variant="bodyText" className={classes.placeholderText}>{emptyPlaceholder}</Typography>
      </>
    );
  };

  render() {
    const {
      columnDefinitions,
      classes,
      header,
      pagination,
      hideEmptyPlaceholder = false,
      emptyPlaceholderInline,
      'data-xpath': dataXpath,
      dataXpathTableRowPropName = 'id',
    } = this.props;
    const order = this.getOrder();
    const orderField = this.getOrderField();
    const page = this.getPage();
    const rowsPerPage = this.getRowsPerPage();
    const { list, totalItems } = this.getListItem();

    return (
      <div className={classes.root} data-xpath={dataXpath?.tableContainer}>
        <TableContainer>
          <MuiTable
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="table"
          >
            <colgroup>
              {
                this.calculateColumnDefinitionWidths().map((def) => (
                  <col span={1} style={{ width: def.width }} key={def.property} />
                ))
              }
            </colgroup>
            <TableHead
              columnDefinitions={columnDefinitions}
              order={order}
              orderField={orderField}
              data-xpath={header?.['data-xpath']}
              onRequestSort={this.handleRequestSort}
            />
            <TableBody>
              {list.map((row) => {
                return (
                  <TableRow
                    tabIndex={-1}
                    key={uniqueId('key_')}
                    data-xpath={createXPathParam(dataXpath?.tableRow, row[dataXpathTableRowPropName as keyof ListItem])}
                    className={classes.row}
                  >
                    {
                      columnDefinitions.map((definition) => (
                        this.renderCell(row, definition)
                      ))
                    }
                  </TableRow>
                );
              })}
              {
                (!hideEmptyPlaceholder && !totalItems && emptyPlaceholderInline) && (
                  <tr className={clsx(classes.placeholder, classes.placeholderInline)}>
                    <td>
                      { this.renderPlaceholder() }
                    </td>
                  </tr>
                )
              }
            </TableBody>
          </MuiTable>
        </TableContainer>
        {
          (!hideEmptyPlaceholder && !totalItems && !emptyPlaceholderInline) && (
            <div className={classes.placeholder}>
              { this.renderPlaceholder() }
            </div>
          )
        }
        {
          !pagination.hidePaginationControls && !!totalItems && (
            <TablePagination
              classes={{
                root: classes.paginationRoot,
                selectRoot: classes.paginationSelect,
                toolbar: classes.paginationToolbar,
              }}
              rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
              component="div"
              count={totalItems}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
              labelRowsPerPage={
                <Typography variant="smallText" component="span">{pagination.labelRowsPerPage}</Typography>
              }
              labelDisplayedRows={this.getDisplayedRowsLabel}
              ActionsComponent={pagination.ariaLabel ? (actions: TablePaginationActionsProps) => TablePaginationActions(
                {
                  ...actions,
                  'data-xpath': pagination?.['data-xpath'],
                  ariaLabel: pagination.ariaLabel as AriaLabel,
                  isTotalKnown: this.isTotalKnown(),
                  disableNextPage: !this.isTotalKnown() && this.getOverThePageSizeCount() <= 0,
                },
              ) : undefined}
              SelectProps={{
                inputProps: { 'data-xpath': pagination?.['data-xpath']?.tablePageCountSelect },
                MenuProps: {
                  classes: { paper: classes.paginationSelectMenu },
                },
              }}
            />
          )
        }
      </div>
    );
  }
}
