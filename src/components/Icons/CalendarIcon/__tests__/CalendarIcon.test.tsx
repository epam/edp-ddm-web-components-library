import React from 'react';
import { shallow } from 'enzyme';
import { ReactComponent as Icon } from 'assets/icons/calendar.svg';
import CalendarIcon from '../CalendarIcon';

describe('CalendarIcon', () => {
  it('should render icon', () => {
    const wrapper = shallow(<CalendarIcon />);
    expect(wrapper.find(Icon)).toBeTruthy();
  });
});
