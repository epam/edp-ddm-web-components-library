import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Order } from 'types/table';
import { Props } from '../Table';
import Table from '../index';

const columnDefinitions = [{
  title: 'ID',
  property: 'id',
}, {
  title: 'Title',
  property: 'title',
}];
const list = [{
  id: '1',
  title: 'Test',
}, {
  id: '2',
  title: 'Test_2',
}];
const order = Order.asc;
const orderField = 'id';

export default {
  title: 'Components/Table',
  component: Table,
  args: {
    columnDefinitions,
    order,
    orderField,
    emptyPlaceholder: 'empty',
    classes: {
      root: '',
    },
    pagination: {
      getDisplayedRowsLabel: ({ from, to }: { from: number, to: number }) => `Рядки ${from}-${to}`,
      labelRowsPerPage: 'Rows per page',
      ariaLabel: {
        firstPage: 'firstPage',
        prevPage: 'prevPage',
        nextPage: 'nextPage',
        lastPage: 'lastPage',
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <Table {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  list,
};

export const DifferentWidths = Template.bind({});
DifferentWidths.args = {
  list: list
    .concat(list)
    .concat(list)
    .concat(list)
    .concat(list)
    .concat(list),
  columnDefinitions: [
    {
      title: 'Weight 2',
      property: 'id',
      width: 2,
    },
    {
      title: 'Fixed 100px',
      property: 'title',
      width: '100px',
      height: 'large',
    },
    {
      title: 'Weight 3',
      property: '',
      width: 3,
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  list: [],
};
