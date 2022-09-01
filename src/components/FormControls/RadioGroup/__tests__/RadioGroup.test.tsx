import React from 'react';
import { shallow } from 'enzyme';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '../RadioGroup';

describe('RadioGroup', () => {
  const items = [
    {
      label: 'test1',
      value: 'test1',
    },
    {
      label: 'test2',
      value: 'test2',
    },
  ];
  it('should render FormControlLabel component', () => {
    const wrapper = shallow(
      <RadioGroup classes={{} as any} value="testValue" onChange={() => {}} items={items} />,
    );
    expect(wrapper.find(FormControlLabel).exists()).toBeTruthy();
  });
});
