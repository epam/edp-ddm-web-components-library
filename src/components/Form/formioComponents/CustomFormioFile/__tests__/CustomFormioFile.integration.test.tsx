import React from 'react';
import { Formio } from 'react-formio';
import Form from 'components/Form/Form';
import { render, screen } from 'utils/testUtils';
import { FormComponent } from 'components/Form/types';
import { FormioModule } from 'index';

Formio.use(FormioModule);

const file = {
  label: 'Upload',
  tableView: false,
  storage: 'url',
  webcam: false,
  fileTypes: [
    {
      label: '',
      value: '',
    },
  ],
  key: 'file',
  type: 'file',
  input: true,
  url: '/documents',
};

describe('CustomFormioFile', () => {
  const props = {
    onSubmit: jest.fn(),
    language: 'ua',
    components: [file] as unknown as FormComponent[],
  };

  it('should render component label', () => {
    render(<Form {...props} />);
    const label = screen.getByText('Upload');
    expect(label).toBeInTheDocument();
  });
});
