import React from 'react';
import { shallow } from 'enzyme';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  it('should render label', () => {
    const wrapper = shallow(<Checkbox value onChange={() => {}} id="345" label="label" classes={{} as any} />);
    expect(wrapper.find(FormControlLabel).exists()).toBeTruthy();
  });
  it('should\'t render label', () => {
    const wrapper = shallow(<Checkbox
      value
      onChange={() => {}}
      id="345"
      label="label"
      classes={{} as any}
      hideLabel
    />);
    expect(wrapper.find(FormControlLabel).props().label).toBe(false);
  });
});
