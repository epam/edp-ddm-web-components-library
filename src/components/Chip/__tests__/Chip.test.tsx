import React from 'react';
import { shallow } from 'enzyme';
import { ReactComponent as Icon } from 'assets/icons/edit.svg';
import { Box } from '@material-ui/core';
import Chip from '../Chip';

describe('Chip', () => {
  const props: any = {
    onClick: jest.fn(),
    title: 'Title',
    icon: <Icon />,
  };

  it('should be defined', () => {
    const wrapper = shallow(<Chip {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find(Box).last().text()).toBe('Title');
  });

  it('should exist class selected', () => {
    const wrapper = shallow(<Chip {...props} isSelected />);
    expect(wrapper.find(Box).first().props().className?.includes('selected')).toBe(true);
  });

  it('should exist class disabled', () => {
    const wrapper = shallow(<Chip {...props} disabled />);
    expect(wrapper.find(Box).first().props().className?.includes('disabled')).toBe(true);
  });
});
