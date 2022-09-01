import React from 'react';
import { shallow } from 'enzyme';
import { Button as MuiButton } from '@material-ui/core';

import Button, { ButtonVariants } from '../Button';

describe('Custom Button test', () => {
  const buttonText = 'some text';
  it('Button should render child', () => {
    const wrapper = shallow(<Button> {buttonText} </Button>);
    expect(wrapper.contains(buttonText)).toBeTruthy();
  });

  it('Button without props should pass correct props to ui library component', () => {
    const wrapper = shallow(<Button>{buttonText}</Button>);
    const muiButton = wrapper.find(MuiButton);
    expect(muiButton.props()).toMatchObject({ variant: 'contained', color: 'primary' });
  });

  it('Button variant "primary" should pass correct props to ui library component', () => {
    const wrapper = shallow(<Button variant={ButtonVariants.primary}>{buttonText}</Button>);
    const muiButton = wrapper.find(MuiButton);
    expect(muiButton.props()).toMatchObject({ variant: 'contained', color: 'primary' });
  });

  it('Button variant "secondary" should pass correct props to ui library component', () => {
    const wrapper = shallow(<Button variant={ButtonVariants.secondary}>{buttonText}</Button>);
    const muiButton = wrapper.find(MuiButton);
    expect(muiButton.props()).toMatchObject({ variant: 'outlined', color: 'secondary' });
  });
});
