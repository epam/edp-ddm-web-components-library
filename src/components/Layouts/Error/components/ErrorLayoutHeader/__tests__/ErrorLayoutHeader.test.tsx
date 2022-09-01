import React from 'react';
import { shallow } from 'enzyme';
import LinkBack from 'components/LinkBack';
import ErrorLayoutHeader from '../ErrorLayoutHeader';

describe('ErrorLayoutHeader', () => {
  it('should render LinkBack component', () => {
    const props = {
      link: '/link',
      title: 'test title',
      navLinkComponent: LinkBack,
      appTitle: 'appTitle',
      homePath: '/testHomePath',
    };
    const wrapper = shallow(<ErrorLayoutHeader {...props} />);
    expect(wrapper.find(LinkBack).exists()).toBeTruthy();
    expect(wrapper.find(LinkBack).props().to).toEqual('/link');
    expect(wrapper.find(LinkBack).props().title).toEqual('test title');
  });

  it('should not render LinkBack component if it includes hideNavigation', () => {
    const props = {
      link: '/link',
      title: 'test title',
      navLinkComponent: LinkBack,
      appTitle: 'appTitle',
      homePath: '/testHomePath',
      hideNavigation: true,
    };
    const wrapper = shallow(<ErrorLayoutHeader {...props} />);
    expect(wrapper.find(LinkBack).exists()).toBeFalsy();
  });
});
