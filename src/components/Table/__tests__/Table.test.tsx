import React from 'react';
import { shallow } from 'enzyme';
import TableRow from '@material-ui/core/TableRow';
import { Order } from '../../../types/table';

import Table from '../Table';

describe('Table', () => {
  const props: any = {
    columnDefinitions: [{ property: 'id', title: 'id' }],
    list: [],
    t: jest.fn(),
    classes: {},
    pagination: {
      labelRowsPerPage: 'label',
      getDisplayedRowsLabel: () => 'label',
    },
  };

  describe('sorting', () => {
    it('should sort correctly', () => {
      const list = [{ id: '2' }, { id: '3' }, { id: '6' }];
      const wrapper = shallow(<Table {...props} list={list} />);
      wrapper.setState({ order: Order.asc, orderField: 'id' });
      const ids = wrapper.find(TableRow).map((row) => row.key());
      expect(ids).toEqual(['key_4', 'key_5', 'key_6']);
    });
  });

  describe('handleRequestSort', () => {
    it('should start with asc', () => {
      const wrapper = shallow(<Table {...props} />);
      (wrapper.instance() as Table).handleRequestSort({} as any, 'id');

      expect(wrapper.state()).toEqual(expect.objectContaining({
        order: Order.asc,
        orderField: 'id',
      }));
    });

    it('should set correct order', () => {
      const wrapper = shallow(<Table {...props} />);
      wrapper.setState({ order: Order.asc, orderField: 'id' });
      (wrapper.instance() as Table).handleRequestSort({} as any, 'id');

      expect(wrapper.state()).toEqual(expect.objectContaining({
        order: Order.desc,
        orderField: 'id',
      }));
    });

    it('should call prop in case of server sorting', () => {
      const onFilterChange = jest.fn();
      const wrapper = shallow(<Table {...props} order={Order.asc} orderField="id" onFilterChange={onFilterChange} />);
      (wrapper.instance() as Table).handleRequestSort({} as any, 'id');

      expect(onFilterChange).toHaveBeenCalledWith({
        page: 0,
        rowsPerPage: 10,
        order: Order.desc,
        orderField: 'id',
      });
    });

    it('should call prop in case of controlled sorting', () => {
      const onOrderChange = jest.fn();
      const wrapper = shallow(<Table {...props} order={Order.asc} orderField="id" onOrderChange={onOrderChange} />);
      (wrapper.instance() as Table).handleRequestSort({} as any, 'id');

      expect(onOrderChange).toHaveBeenCalledWith('id', Order.desc);
    });
  });

  describe('calculateColumnDefinitionWidths', () => {
    it('should calculate percentages correctly', () => {
      const columnDefinitions = [
        { width: '100px', property: '1' },
        { width: 2, property: '2' },
        { width: 3, property: '3' },
      ];
      const wrapper = shallow(<Table {...props} columnDefinitions={columnDefinitions} />);
      const result = (wrapper.instance() as Table).calculateColumnDefinitionWidths();

      expect(result).toEqual([
        { width: '100px', property: '1' },
        { width: '40%', property: '2' },
        { width: '60%', property: '3' },
      ]);
    });
  });

  describe('getListItem', () => {
    const list = [1, 2, 3, 4];

    it('should limit the list when over the page size', () => {
      const wrapper = shallow(<Table
        {...props}
        onFilterChange={() => {}}
        list={list}
        pagination={{
          page: 1,
          rowsPerPage: 2,
        }}
      />);

      expect((wrapper.instance() as Table).getListItem()).toEqual(expect.objectContaining({
        list: [1, 2],
      }));
    });
  });
});
