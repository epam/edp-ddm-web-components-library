import React from 'react';
import { shallow } from 'enzyme';
import AccountMenu from 'components/AccountMenu';
import Button from 'components/Button';

describe('AccountMenu test', () => {
  const props: any = {};
  const childComponent = '<div>Menu item</div>';
  it('AccountMenu should render child', () => {
    const wrapper = shallow(<AccountMenu> {childComponent} </AccountMenu>);
    expect(wrapper.contains(childComponent)).toBeTruthy();
  });

  it('should render a button', () => {
    const wrapper = shallow(<AccountMenu {...props} />);
    expect(wrapper.find(Button).length > 0).toBeTruthy();
  });
});
