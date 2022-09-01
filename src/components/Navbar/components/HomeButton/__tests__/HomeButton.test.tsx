import React from 'react';
import { shallow } from 'enzyme';
import Link from 'components/Link';
import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg';
import HomeButton from '../HomeButton';

describe('HomeButton', () => {
  const props = {
    homePath: '/ho',
    appTitle: 'appTitle',
    navLinkComponent: Link,
  };
  it('should render logo first with left direction', () => {
    const wrapper = shallow(<HomeButton direction="left" {...props} />);

    expect(wrapper.find(Link).childAt(0).contains(<LogoIcon />)).toBeTruthy();
  });

  it('should render logo second with left direction', () => {
    const wrapper = shallow(<HomeButton direction="right" {...props} />);

    expect(wrapper.find(Link).childAt(1).contains(<LogoIcon />)).toBeTruthy();
  });
});
