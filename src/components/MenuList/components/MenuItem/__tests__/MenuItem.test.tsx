import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from 'components/MenuList/components/MenuItem';

describe('MenuItem', () => {
  const childText = 'some text';
  it('MenuItem should render child', () => {
    const wrapper = shallow(<MenuItem> {childText} </MenuItem>);
    expect(wrapper.contains(childText)).toBeTruthy();
  });
});
