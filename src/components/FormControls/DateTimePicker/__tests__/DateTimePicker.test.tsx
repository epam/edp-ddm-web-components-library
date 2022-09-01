import React from 'react';
import { shallow } from 'enzyme';

import DateTimePicker from '../DateTimePicker';

describe('DateTime', () => {
  describe('onChange', () => {
    it('should call onChange with correct format', () => {
      const onChange = jest.fn();
      const wrapper = shallow(
        <DateTimePicker value={null} onChange={onChange} id="345" label="label" classes={{} as any} />,
      );
      const instance = wrapper.instance() as DateTimePicker;
      const newDate = new Date('10/8/2021, 2:01:29 PM GMT+0000');

      instance.setValue(newDate);

      expect(onChange).toHaveBeenCalledWith('2021-10-08T14:01:29.000Z');
    });

    it('should call onChange with correct date', () => {
      const onChange = jest.fn();
      const wrapper = shallow(
        <DateTimePicker
          value={null}
          onChange={onChange}
          enableTime={false}
          id="345"
          label="label"
          classes={{} as any}
        />,
      );
      const instance = wrapper.instance() as DateTimePicker;
      const newDate = new Date('10/8/2021, 0:00:00 AM');

      instance.setValue(newDate);

      expect(onChange).toHaveBeenCalledWith('2021-10-08');
    });
  });
});
