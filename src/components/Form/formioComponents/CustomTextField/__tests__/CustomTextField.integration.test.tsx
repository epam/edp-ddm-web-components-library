import React from 'react';
import { Formio } from 'react-formio';
import Form from 'components/Form/Form';
import { render, screen } from 'utils/testUtils';
import { FormComponent } from 'components/Form/types';
import { FormioModule } from 'index';

Formio.use(FormioModule);

const textfield = {
  label: 'Text Field',
  tableView: true,
  key: 'textfieldLatest',
  type: 'textfieldLatest',
  input: true,
};

describe('CustomTextField', () => {
  const props = {
    onSubmit: jest.fn(),
    language: 'ua',
    components: [textfield] as unknown as FormComponent[],
  };

  it('should render component label', () => {
    render(<Form {...props} />);
    const label = screen.getByLabelText('Text Field');
    expect(label).toBeInTheDocument();
  });
});
