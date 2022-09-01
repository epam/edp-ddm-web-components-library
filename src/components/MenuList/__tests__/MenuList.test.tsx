import React from 'react';
import { shallow } from 'enzyme';
import MenuList from 'components/MenuList';

describe('MenuList test', () => {
  const childText = 'some text';
  it('MenuList should render child', () => {
    const wrapper = shallow(<MenuList> {childText} </MenuList>);
    expect(wrapper.contains(childText)).toBeTruthy();
  });
});
