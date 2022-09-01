import React from 'react';
import { shallow } from 'enzyme';

import FieldError from '../FieldError';

describe('FieldError test', () => {
  const containerText = 'some text';
  it('FieldError should render error message', () => {
    const wrapper = shallow(<FieldError error={{ message: containerText }} />);
    expect(wrapper.contains(containerText)).toBeTruthy();
  });
});
