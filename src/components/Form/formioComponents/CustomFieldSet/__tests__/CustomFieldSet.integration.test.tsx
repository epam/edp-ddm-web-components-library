import React from 'react';
import { Formio } from 'react-formio';
import Form from 'components/Form/Form';
import { render, screen } from 'utils/testUtils';
import { FormComponent } from 'components/Form/types';
import { FormioModule } from 'index';

Formio.use(FormioModule);

const fieldSet = {
  'key': 'fieldSet',
  'type': 'fieldset',
  'legend': 'Field Set',
  'input': false,
  'tableView': false,
  'components': [],
};

describe('CustomFieldSet', () => {
  const props = {
    onSubmit: jest.fn(),
    language: 'ua',
    components: [fieldSet] as unknown as FormComponent[],
  };

  it('should render component label', () => {
    render(<Form {...props} />);
    const label = screen.getByText('Field Set');
    expect(label).toBeInTheDocument();
  });
});
