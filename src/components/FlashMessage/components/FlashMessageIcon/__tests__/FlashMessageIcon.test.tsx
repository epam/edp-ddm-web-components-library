import React from 'react';
import { shallow } from 'enzyme';

import { ReactComponent as ErrorIcon } from 'assets/icons/notifications/error.svg';
import { ReactComponent as WarningIcon } from 'assets/icons/notifications/warning.svg';
import { ReactComponent as SuccessIcon } from 'assets/icons/notifications/success.svg';

import FlashMessageIcon from '../FlashMessageIcon';

describe('FlashMessageIcon', () => {
  describe('with error status', () => {
    const props: any = {
      status: 'error',
    };
    it('should return error icon', () => {
      const wrapper = shallow(<FlashMessageIcon {...props} />);
      expect(wrapper.find(ErrorIcon).exists()).toBeTruthy();
    });
  });
  describe('with warning status', () => {
    const props: any = {
      status: 'warning',
    };
    it('should return warning icon', () => {
      const wrapper = shallow(<FlashMessageIcon {...props} />);
      expect(wrapper.find(WarningIcon).exists()).toBeTruthy();
    });
  });
  describe('with success status', () => {
    const props: any = {
      status: 'success',
    };
    it('should return success icon', () => {
      const wrapper = shallow(<FlashMessageIcon {...props} />);
      expect(wrapper.find(SuccessIcon).exists()).toBeTruthy();
    });
  });
  describe('with test status', () => {
    const props: any = {
      status: 'test',
    };
    it('should return null', () => {
      const wrapper = shallow(<FlashMessageIcon {...props} />);
      expect(wrapper.isEmptyRender()).toBe(true);
    });
  });
});
