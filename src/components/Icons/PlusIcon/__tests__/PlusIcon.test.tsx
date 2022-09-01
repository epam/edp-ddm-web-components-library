import React from 'react';
import { shallow } from 'enzyme';
import { ReactComponent as Icon } from 'assets/icons/plus.svg';
import PlusIcon from '../PlusIcon';

describe('PlusIcon', () => {
  it('should render icon', () => {
    const wrapper = shallow(<PlusIcon />);
    expect(wrapper.find(Icon)).toBeTruthy();
  });
});
