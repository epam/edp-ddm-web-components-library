import React from 'react';
import { Formio } from 'react-formio';
import Form from 'components/Form/Form';
import { render, screen } from 'utils/testUtils';
import { FormComponent } from 'components/Form/types';
import { FormioModule } from 'index';

Formio.use(FormioModule);

const email = {
  label: 'Email',
  tableView: true,
  key: 'emailLatest',
  type: 'emailLatest',
  input: true,
};

describe('CustomEmail', () => {
  const props = {
    onSubmit: jest.fn(),
    language: 'ua',
    components: [email] as unknown as FormComponent[],
  };

  it('should render component label', () => {
    render(<Form {...props} />);
    const label = screen.getByLabelText('Email');
    expect(label).toBeInTheDocument();
  });
});
