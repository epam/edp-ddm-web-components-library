import React from 'react';
import { shallow } from 'enzyme';
import { ReactComponent as Icon } from 'assets/icons/menu.svg';
import MenuIcon from '../MenuIcon';

describe('MenuIcon', () => {
  it('should render icon', () => {
    const wrapper = shallow(<MenuIcon />);
    expect(wrapper.find(Icon)).toBeTruthy();
  });
});
