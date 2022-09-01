import React from 'react';
import { shallow } from 'enzyme';

import InlineButton from '..';

describe('ColoredBox', () => {
  const buttonText = 'some text';
  it('InlineButton should render child', () => {
    const wrapper = shallow(<InlineButton> {buttonText} </InlineButton>);
    expect(wrapper.contains(buttonText)).toBeTruthy();
  });
});
