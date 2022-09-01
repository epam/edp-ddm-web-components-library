import React from 'react';
import { shallow } from 'enzyme';
import TrashCanIcon from '../TrashCanIcon';

describe('TrashCanIcon', () => {
  it('should render span', () => {
    const wrapper = shallow(<TrashCanIcon />);
    expect(wrapper.find('span')).toBeTruthy();
    expect(wrapper.find('span').text()).toEqual('🗑');
  });
});
