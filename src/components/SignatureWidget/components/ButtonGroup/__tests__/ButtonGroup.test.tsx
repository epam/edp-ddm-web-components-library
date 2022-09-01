import React from 'react';
import { shallow } from 'enzyme';
import ButtonGroup from '../ButtonGroup';
import Button from 'components/Button';

jest.mock('@material-ui/core/styles', () => ({
  useTheme: () => ({ colors: {} }),
  makeStyles: () => () => ({}),
}));

describe('ButtonGroup', () => {
  const props: any = {
    buttons: [
      {
        'type': 'button',
        'label': 'Submit',
        'key': 'submit',
      },
      {
        'type': 'button',
        'label': 'Submit 2',
        'key': 'submit 2',
      },
      {
        'type': 'button',
        'label': 'Submit 3',
        'key': 'submit 3',
      },
    ],
    onClick: jest.fn(),
  };

  it('should render button components', () => {
    const wrapper = shallow(<ButtonGroup {...props} />);
    expect(wrapper.find(Button).length).toEqual(3);
  });
});
