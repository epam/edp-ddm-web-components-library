import React from 'react';
import { shallow } from 'enzyme';
import EditIcon from '../EditIcon';

describe('EditIcon', () => {
  it('should be defined', () => {
    const wrapper = shallow(<EditIcon />);
    expect(wrapper).toBeDefined();
  });
});
