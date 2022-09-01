import React from 'react';
import { shallow } from 'enzyme';

import InlineButton from 'components/InlineButton';
import LinkBack from '../LinkBack';

describe('LinkBack', () => {
  const props = {
    to: '/link',
    component: () => <span />,
  };

  it('should contain an InlineButton to passed location', () => {
    const wrapper = shallow(<LinkBack {...props} />);
    expect(wrapper.find(InlineButton).find({ to: '/link' }).exists()).toBeTruthy();
  });

  it('should contain a class to passed location', () => {
    const wrapper = shallow(<LinkBack {...props} classNameLink="classNameLink" />);
    expect(wrapper.find(InlineButton).props().classes?.link?.includes('classNameLink')).toBeTruthy();
  });

  it('should contain a class to passed location', () => {
    const wrapper = shallow(<LinkBack {...props} classNameTitle="classNameTitle" />);
    expect(wrapper.find(InlineButton).props().classes?.title?.includes('classNameTitle')).toBeTruthy();
  });
});
