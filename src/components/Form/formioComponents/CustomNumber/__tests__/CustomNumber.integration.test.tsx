import React from 'react';
import { Formio } from 'react-formio';
import Form from 'components/Form/Form';
import { render, screen } from 'utils/testUtils';
import { FormComponent } from 'components/Form/types';
import { FormioModule } from 'index';

Formio.use(FormioModule);

const number = {
  label: 'Number',
  mask: false,
  tableView: false,
  delimiter: false,
  requireDecimal: false,
  inputFormat: 'plain',
  truncateMultipleSpaces: false,
  key: 'numberLatest',
  type: 'numberLatest',
  input: true,
};

describe('CustomNumber', () => {
  const props = {
    onSubmit: jest.fn(),
    language: 'ua',
    components: [number] as unknown as FormComponent[],
  };

  it('should render component label', () => {
    render(<Form {...props} />);
    const label = screen.getByLabelText('Number');
    expect(label).toBeInTheDocument();
  });
});
