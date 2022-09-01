import React from 'react';
import { shallow } from 'enzyme';
import Typography from 'components/Typography';
import LinkBack from 'components/LinkBack';
import ErrorLayout from '../ErrorLayout';

describe('ErrorLayout', () => {
  it('should use title from props', () => {
    const error = {
      componentProps: {
        title: 'prop title',
      },
    };
    const wrapper = shallow(
      <ErrorLayout
        error={error}
        appTitle="appTitle"
        defaultBackLinkTitle="back"
        defaultDescription="error description"
        defaultErrorTitle="defaultErrorTitle"
        defaultMessage="defaultMessage"
        reloadButtonCaption="reloadButtonCaption"
        homePath="/home"
        navLinkComponent={({ children }) => children}
        onBackLinkClick={() => null}
      />,
    );
    expect(wrapper.find(Typography).findWhere((n) => n.text() === 'prop title')).toHaveLength(1);
  });

  it('should render LinkBack component if it includes hasRefreshBtn', () => {
    const error = {
      componentProps: {
        title: 'prop title',
        hasRefreshBtn: true,
      },
    };
    const wrapper = shallow(
      <ErrorLayout
        error={error}
        appTitle="appTitle"
        defaultBackLinkTitle="back"
        defaultDescription="error description"
        defaultErrorTitle="defaultErrorTitle"
        defaultMessage="defaultMessage"
        reloadButtonCaption="reloadButtonCaption"
        homePath="/home"
        navLinkComponent={({ children }) => children}
        onBackLinkClick={() => null}
      />,
    );
    expect(wrapper.find(LinkBack).exists()).toBeTruthy();
  });

  it('should not render LinkBack component if it includes hideNavigation', () => {
    const error = {
      componentProps: {
        title: 'prop title',
        hasRefreshBtn: true,
        hideNavigation: true,
      },
    };
    const wrapper = shallow(
      <ErrorLayout
        error={error}
        appTitle="appTitle"
        defaultBackLinkTitle="back"
        defaultDescription="error description"
        defaultErrorTitle="defaultErrorTitle"
        defaultMessage="defaultMessage"
        reloadButtonCaption="reloadButtonCaption"
        homePath="/home"
        navLinkComponent={({ children }) => children}
        onBackLinkClick={() => null}
      />,
    );
    expect(wrapper.find(LinkBack).exists()).toBeFalsy();
  });
});
