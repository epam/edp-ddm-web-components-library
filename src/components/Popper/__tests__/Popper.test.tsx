import React from 'react';
import { shallow } from 'enzyme';
import { Popper as MuiPopper } from '@material-ui/core';
import Popper from 'components/Popper';

function getProps(isOpen: boolean): any {
  return {
    children: <p>The content of the Popper.</p>,
    anchorEl: {
      current: {
        clientHeight: 100,
        clientWidth: 100,
        getBoundingClientRect: jest.fn(),
      },
    },
    open: isOpen,
  };
}

describe('Popper', () => {
  it('popper should be open', () => {
    const wrapper = shallow(<Popper {...getProps(true)} />);
    expect(wrapper.find(MuiPopper).props().open).toEqual(true);
  });
  it('popper should be close', () => {
    const wrapper = shallow(<Popper {...getProps(false)} />);
    expect(wrapper.find(MuiPopper).props().open).toEqual(false);
  });
});
