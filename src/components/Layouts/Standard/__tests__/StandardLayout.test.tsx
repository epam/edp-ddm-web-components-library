import React from 'react';
import { shallow } from 'enzyme';

import Typography from 'components/Typography';

import StandardLayout from '../StandardLayout';

describe('StandardLayout', () => {
  const props: any = {
    children: 'test',
  };

  it('should render link if titleLink is present', () => {
    const wrapper = shallow(<StandardLayout {...props} title="something" />);
    expect(wrapper.find(Typography)).toHaveLength(1);
  });

  it('should not render link if titleLink is absent', () => {
    const wrapper = shallow(<StandardLayout {...props} title={undefined} />);
    expect(wrapper.find(Typography)).toHaveLength(0);
  });
});
