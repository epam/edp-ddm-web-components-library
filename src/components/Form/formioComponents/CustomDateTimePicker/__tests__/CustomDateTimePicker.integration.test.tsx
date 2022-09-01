import React from 'react';
import { Formio } from 'react-formio';
import Form from 'components/Form/Form';
import { render, screen } from 'utils/testUtils';
import { FormComponent } from 'components/Form/types';
import { FormioModule } from 'index';

Formio.use(FormioModule);

const dateTime = {
  label: 'Date / Time',
  tableView: false,
  datePicker: {
    disableWeekends: false,
    disableWeekdays: false,
  },
  enableMinDateInput: false,
  enableMaxDateInput: false,
  key: 'datetimeLatest',
  type: 'datetimeLatest',
  input: true,
  widget: {
    type: 'calendar',
    displayInTimezone: 'viewer',
    locale: 'en',
    useLocaleSettings: false,
    allowInput: true,
    mode: 'single',
    enableTime: true,
    noCalendar: false,
    format: 'yyyy-MM-dd hh:mm a',
    hourIncrement: 1,
    minuteIncrement: 1,
    time_24hr: false,
    minDate: null,
    disableWeekends: false,
    disableWeekdays: false,
    maxDate: null,
  },
};

describe('CustomDateTimePicker', () => {
  const props = {
    onSubmit: jest.fn(),
    language: 'ua',
    components: [dateTime] as unknown as FormComponent[],
  };

  it('should render component label', () => {
    render(<Form {...props} />);
    const label = screen.getByLabelText('Date / Time');
    expect(label).toBeInTheDocument();
  });
});
