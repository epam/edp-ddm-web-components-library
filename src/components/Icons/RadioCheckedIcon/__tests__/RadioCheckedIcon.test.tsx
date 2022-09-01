import React from 'react';
import { shallow } from 'enzyme';
import RadioCheckedIcon from '../RadioCheckedIcon';

jest.mock('@material-ui/core/styles', () => ({
  useStyles: () => ({}),
  useTheme: () => ({ colors: {} }),
  makeStyles: () => () => ({}),
}));

describe('RadioCheckedIcon', () => {
  it('should render icon', () => {
    const wrapper = shallow(<RadioCheckedIcon />);
    expect(wrapper.find('svg')).toBeTruthy();
  });
});
