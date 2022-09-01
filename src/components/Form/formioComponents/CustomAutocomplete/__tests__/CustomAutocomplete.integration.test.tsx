import React from 'react';
import { Formio } from 'react-formio';
import Form from 'components/Form/Form';
import { render, screen } from 'utils/testUtils';
import { FormComponent } from 'components/Form/types';
import { FormioModule } from 'index';

Formio.use(FormioModule);

const select = {
  label: 'Select',
  widget: 'choicesjs',
  tableView: true,
  data: {
    values: [
      {
        label: 'item1',
        value: 'item1',
      },
      {
        label: 'item2',
        value: 'item2',
      },
    ],
  },
  key: 'selectLatest',
  type: 'selectLatest',
  input: true,
};

describe('CustomAutocomplete', () => {
  const props = {
    onSubmit: jest.fn(),
    language: 'ua',
    components: [select] as unknown as FormComponent[],
  };

  it('should render component label', () => {
    render(<Form {...props} />);
    const label = screen.getByLabelText('Select');
    expect(label).toBeInTheDocument();
  });
});
