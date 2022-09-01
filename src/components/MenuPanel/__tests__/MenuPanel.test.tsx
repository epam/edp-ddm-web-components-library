import React from 'react';
import { shallow } from 'enzyme';

import Link from 'components/Link';
import Typography from 'components/Typography';

import MenuPanel from '../MenuPanel';

describe('MenuPanel', () => {
  const props: any = {
    title: 'title',
    t: jest.fn(),
  };

  it('should render link if titleLink is present', () => {
    const wrapper = shallow(<MenuPanel {...props} titleLink="/somewhere" />);
    expect(wrapper.find(Link)).toHaveLength(1);
  });

  it('should not render link if titleLink is absent', () => {
    const wrapper = shallow(<MenuPanel {...props} titleLink={undefined} />);
    expect(wrapper.find(Link)).toHaveLength(0);
  });

  it('should render error element if isError prop is true', () => {
    const wrapper = shallow(<MenuPanel {...props} hasError unknownErrorText="errors.unknown" />);
    expect(wrapper.find(Typography).at(2).render().text()).toEqual('errors.unknown');
  });

  it('should not render error element if isError prop is false', () => {
    const wrapper = shallow(<MenuPanel {...props} hasError={false} unknownErrorText="errors.unknown" />);
    expect(wrapper.find(Typography).at(2).render().text()).not.toEqual('errors.unknown');
  });
});
