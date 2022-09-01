import React from 'react';
import { shallow } from 'enzyme';
import { TextField } from '@material-ui/core';
import Input, { InputProps } from '../Input';

describe('Input', () => {
  it('should display the error message', () => {
    const props = {
      name: 'title',
      error: {
        message: 'error message',
      },
    } as InputProps;
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find(TextField).props().error).toBe(true);
  });
  it('should not display the error message', () => {
    const props = {
      name: 'title',
    } as InputProps;
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find(TextField).props().error).toBe(false);
  });
  it('should display prefix', () => {
    const wrapper = shallow(<Input name="input" prefix="$" />);
    expect(wrapper.find(TextField).props().InputProps?.startAdornment).toBeTruthy();
  });
  it('should display suffix', () => {
    const wrapper = shallow(<Input name="input" suffix="$" />);
    expect(wrapper.find(TextField).props().InputProps?.endAdornment).toBeTruthy();
  });
  it('shrink prop should be exist', () => {
    const wrapper = shallow(<Input name="input" isLabelShrink />);
    expect(wrapper.find(TextField).props().InputLabelProps?.shrink).toBeTruthy();
  });
});
