import React from 'react';
import { shallow } from 'enzyme';

import Input from 'components/FormControls/Input';

import DateTimePickerInput from '../DateTimePickerInput';

describe('DateTimePickerInput', () => {
  it('should disabled input', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <DateTimePickerInput value="test" onChange={onChange} name="name" inputDisabled />,
    );
    const input = wrapper.find(Input);
    expect(input.prop('disabled')).toBeTruthy();
  });
});
