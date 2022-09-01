import { IconButton } from '@material-ui/core';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import React from 'react';
import { shallow } from 'enzyme';
import TablePaginationActions from '../TablePaginationActions';

describe('TablePaginationActions', () => {
  const props: any = {
    count: 10,
    page: 0,
    rowsPerPage: 5,
    onChangePage: jest.fn(),
    'data-xpath': {} as any,
    ariaLabel: {} as any,
    isTotalKnown: true,
  };

  describe('disabled states', () => {
    it('should correctly disable first page button', () => {
      const wrapper = shallow(<TablePaginationActions {...props} />);

      expect(wrapper.find(FirstPageIcon).closest(IconButton).props().disabled).toEqual(true);
    });

    it('should correctly enable last button', () => {
      const wrapper = shallow(<TablePaginationActions {...props} />);

      expect(wrapper.find(LastPageIcon).closest(IconButton).props().disabled).toEqual(false);
    });
  });

  describe('total unknown', () => {
    it('should not render last button', () => {
      const wrapper = shallow(<TablePaginationActions {...props} isTotalKnown={false} />);

      expect(wrapper.find(LastPageIcon).length).toBeFalsy();
    });
  });
});
