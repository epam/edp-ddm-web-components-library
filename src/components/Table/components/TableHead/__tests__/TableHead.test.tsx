import React from 'react';
import { shallow } from 'enzyme';
import TableCell from '@material-ui/core/TableCell';
import { Order } from '../../../../../types/table';

import TableHead from '../TableHead';

describe('TableHead', () => {
  const props: any = {
    columnDefinitions: [],
    onRequestSort: jest.fn(),
    order: Order.asc,
    orderField: 'id',
  };

  it('should render header cells', () => {
    const definitions = [{ property: 'id', title: 'id' }, { property: 'id2', title: 'id2' }];
    const wrapper = shallow(<TableHead {...props} columnDefinitions={definitions} />);

    expect(wrapper.find(TableCell).length).toEqual(2);
  });
});
