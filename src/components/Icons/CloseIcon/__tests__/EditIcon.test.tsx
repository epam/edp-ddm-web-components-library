import React from 'react';
import { shallow } from 'enzyme';
import { ReactComponent as Icon } from 'assets/icons/notifications/close.svg';
import CloseIcon from '../CloseIcon';

describe('CloseIcon', () => {
  it('should render icon', () => {
    const wrapper = shallow(<CloseIcon />);
    expect(wrapper.find(Icon)).toBeTruthy();
  });
});
