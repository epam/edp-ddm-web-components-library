import React from 'react';
import { shallow } from 'enzyme';
import MuiAutocomplete from '@material-ui/lab/Autocomplete';

import Autocomplete from '../Autocomplete';

describe('Select', () => {
  const props = {
    name: 'name',
    label: 'Label',
    placeholder: 'Placeholder',
    options: [
      {
        label: 'test1',
        value: 'test1',
      },
      {
        label: 'test2',
        value: 'test2',
      },
    ],
  } as any;

  it('should render FormControlLabel component', () => {
    const wrapper = shallow(
      <Autocomplete
        {...props}
        classes={{} as any}
        onChange={() => {}}
      />,
    );
    expect(wrapper.find(MuiAutocomplete).exists()).toBeTruthy();
  });
});
