import React from 'react';
import { shallow } from 'enzyme';

import ColoredBox from '..';

describe('ColoredBox', () => {
  const boxText = 'some text';
  it('ColoredBox should render child', () => {
    const wrapper = shallow(<ColoredBox> {boxText} </ColoredBox>);
    expect(wrapper.contains(boxText)).toBeTruthy();
  });
});
