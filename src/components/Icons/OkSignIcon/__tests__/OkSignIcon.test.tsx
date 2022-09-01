import React from 'react';
import { shallow } from 'enzyme';
import OkSignIcon from '../OkSignIcon';

describe('OkSignIcon', () => {
  it('should render span', () => {
    const wrapper = shallow(<OkSignIcon />);
    expect(wrapper.find('span')).toBeTruthy();
    expect(wrapper.find('span').text()).toEqual('👌');
  });
});
