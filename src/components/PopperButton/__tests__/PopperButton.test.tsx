import React from 'react';
import { shallow } from 'enzyme';
import Button from 'components/Button';
import Popper from 'components/Popper';
import PopperButton from 'components/PopperButton';
import IconButton from 'components/IconButton';
import { ButtonType } from 'types/popper';

function getProps(buttonType: ButtonType): any {
  return {
    children: <p>The content of the Popper.</p>,
    buttonType,
  };
}

describe('PopperButton', () => {
  it('should be render Button component', () => {
    const wrapper = shallow(<PopperButton {...getProps(ButtonType.default)} />);
    expect(wrapper.find(Button).length).toBeTruthy();
  });
  it('should be render IconButton component', () => {
    const wrapper = shallow(<PopperButton {...getProps(ButtonType.icon)} />);
    expect(wrapper.find(IconButton).length).toBeTruthy();
  });
  it('popper should be open', () => {
    const wrapper = shallow(<PopperButton {...getProps(ButtonType.default)} />);
    wrapper.find(Button).simulate('click');
    expect(wrapper.find(Popper).props().open).toEqual(true);
  });
  it('popper should be close', () => {
    const wrapper = shallow(<PopperButton {...getProps(ButtonType.default)} />);
    expect(wrapper.find(Popper).props().open).toEqual(false);
  });
});
