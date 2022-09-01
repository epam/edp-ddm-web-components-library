import React from 'react';
import { shallow } from 'enzyme';
import FlashMessage from '..';
import { FlashMessageProps, ViewType } from '../FlashMessage';

describe('FlashMessage', () => {
  describe('title', () => {
    const props: FlashMessageProps = {
      status: 'error',
      title: 'Test title',
      message: 'Test message',
      onClose: () => 'test_id',
    };

    it('should be render component with title section', () => {
      const wrapper = shallow(<FlashMessage {...props} />);
      expect(wrapper.find('div').findWhere((n) => n.text() === 'Test title').length).toBeTruthy();
    });

    it('should be render component without title section', () => {
      const wrapper = shallow(<FlashMessage {...props} title="" />);
      expect(wrapper.find('div').findWhere((n) => n.text() === 'Test title').length).toBeFalsy();
    });

    it('should be exist class plainMessage', () => {
      const wrapper = shallow(<FlashMessage {...props} viewType={ViewType.plain} />);
      expect(wrapper.findWhere(
        (n) => n.type() === 'div' && n.text() === 'Test message',
      ).props().className.includes('plainMessage')).toBeTruthy();
    });
  });
});
