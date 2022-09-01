import React from 'react';
import { shallow } from 'enzyme';

import TimePicker from '../TimePicker';

describe('TimePicker', () => {
  describe('onHoursChange', () => {
    it('should call onChange when initial value is empty', () => {
      const onChange = jest.fn();
      const wrapper = shallow(
        <TimePicker onChange={onChange} classes={{} as any} />,
      );
      const instance = wrapper.instance() as TimePicker;

      instance.onHoursChange({ target: { value: '4' } } as any);

      expect(onChange).toHaveBeenCalledWith('04:00');
    });

    it('should call onChange when initial value is filled', () => {
      const onChange = jest.fn();
      const wrapper = shallow(
        <TimePicker value="03:77" onChange={onChange} classes={{} as any} />,
      );
      const instance = wrapper.instance() as TimePicker;

      instance.onHoursChange({ target: { value: '4' } } as any);

      expect(onChange).toHaveBeenCalledWith('04:77');
    });
  });

  describe('onMinutesChange', () => {
    it('should call onChange when initial value is empty', () => {
      const onChange = jest.fn();
      const wrapper = shallow(
        <TimePicker onChange={onChange} classes={{} as any} />,
      );
      const instance = wrapper.instance() as TimePicker;

      instance.onMinutesChange({ target: { value: '4' } } as any);

      expect(onChange).toHaveBeenCalledWith('00:04');
    });

    it('should call onChange when initial value is filled', () => {
      const onChange = jest.fn();
      const wrapper = shallow(
        <TimePicker value="03:77" onChange={onChange} classes={{} as any} />,
      );
      const instance = wrapper.instance() as TimePicker;

      instance.onMinutesChange({ target: { value: '4' } } as any);

      expect(onChange).toHaveBeenCalledWith('03:04');
    });
  });
});
