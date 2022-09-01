import React from 'react';
import { shallow } from 'enzyme';

import Loader from '../Loader';

jest.mock('@material-ui/core/styles', () => ({
  useStyles: () => ({}),
  useTheme: () => ({ colors: {} }),
  makeStyles: () => () => ({
    hide: 'hide',
  }),
}));

describe('Loader', () => {
  it('should hide loader', () => {
    const wrapper = shallow(<Loader show={false} />);
    expect(wrapper.find('.hide').exists()).toBeTruthy();
  });
});
