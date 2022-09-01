import React from 'react';

export interface CellComponentProps {
  item: ListItem;
  columnDefinition: ColumnDefinition;
}

export interface ColumnDefinition {
  property: string;
  title: string;
  width?: string | number;
  height?: 'default' | 'large';
  Component?: React.ElementType<CellComponentProps>;
  formatter?(listItem: ListItem, property: string): string;
  sortable?: boolean;
  cellClass?: string;
}

export type ListItem = {
  id?: string,
};

export enum Order {
  asc = 'asc',
  desc = 'desc',
}

export interface XPathTablePagination {
  tableFirstPage: string,
  tablePrevPage: string,
  tableNextPage: string,
  tableLastPage: string
  tablePageCountSelect: string,
}

export interface XPathTable {
  tableContainer: string,
  tableRow: string,
}

export interface AriaLabel {
  firstPage: string,
  prevPage: string,
  nextPage: string,
  lastPage: string
}

export interface FilterParams {
  page: number,
  rowsPerPage: number,
  order: Order,
  orderField: string,
}
