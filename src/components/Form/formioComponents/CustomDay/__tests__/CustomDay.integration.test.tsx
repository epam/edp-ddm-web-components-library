import React from 'react';
import { Formio } from 'react-formio';
import Form from 'components/Form/Form';
import { render, screen } from 'utils/testUtils';
import { FormComponent } from 'components/Form/types';
import { FormioModule } from 'index';

Formio.use(FormioModule);

const day = {
  label: 'Day',
  hideInputLabels: false,
  inputsLabelPosition: 'top',
  useLocaleSettings: false,
  tableView: false,
  fields: {
    day: {
      hide: false,
    },
    month: {
      hide: false,
    },
    year: {
      hide: false,
    },
  },
  key: 'day',
  type: 'day',
  input: true,
  defaultValue: '00/00/0000',
};

describe('CustomDay', () => {
  const props = {
    onSubmit: jest.fn(),
    language: 'ua',
    components: [day] as unknown as FormComponent[],
  };

  it('should render component label', () => {
    render(<Form {...props} />);
    const label = screen.getByLabelText('Day');
    expect(label).toBeInTheDocument();
  });
});
