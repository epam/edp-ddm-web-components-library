import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../../../Button';
import ButtonCell from '../ButtonCell';

describe('ButtonCell', () => {
  const props: any = {
    columnDefinition: {},
    item: {},
    onClick: jest.fn(),
    isDisabled: jest.fn(),
    title: '',
  };

  describe('componentDidMount', () => {
    it('should pass correct disabled state', () => {
      const wrapper = shallow(<ButtonCell {...props} isDisabled={() => true} />);
      expect(wrapper.find(Button).props().disabled).toBeTruthy();
    });
  });
});
