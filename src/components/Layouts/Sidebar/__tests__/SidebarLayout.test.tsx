import React from 'react';
import { shallow } from 'enzyme';

import SidebarLayout from '../SidebarLayout';

describe('SidebarLayout', () => {
  const props: any = {
    children: 'test',
  };

  it('should render title if title is present', () => {
    const wrapper = shallow(<SidebarLayout {...props} title="something" />);
    expect(wrapper.find({ variant: 'h2' })).toHaveLength(1);
  });
});
