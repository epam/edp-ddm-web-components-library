import React from 'react';
import { shallow } from 'enzyme';
import { ReactComponent as Icon } from 'assets/icons/pointUp.svg';
import PointUpIcon from '../PointUpIcon';

describe('PointUpIcon', () => {
  it('should render icon', () => {
    const wrapper = shallow(<PointUpIcon />);
    expect(wrapper.find(Icon)).toBeTruthy();
  });
});
