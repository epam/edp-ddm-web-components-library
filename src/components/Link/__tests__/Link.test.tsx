import React from 'react';
import { shallow } from 'enzyme';

import Link from '../Link';

describe('Link', () => {
  const Component = () => <span />;
  const props = {
    to: '/link',
    component: Component,
  };

  it('should contain a link to passed location', () => {
    const wrapper = shallow(<Link {...props}>Link</Link>);
    expect(wrapper.find(Component).exists()).toBeTruthy();
  });
});
