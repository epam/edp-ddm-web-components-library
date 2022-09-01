import React from 'react';
import { Formio } from 'react-formio';
import Form from 'components/Form/Form';
import { render, screen } from 'utils/testUtils';
import { FormComponent } from 'components/Form/types';
import { FormioModule } from 'index';

Formio.use(FormioModule);

const textarea = {
  label: 'Text Area',
  autoExpand: false,
  tableView: true,
  key: 'textareaLatest',
  type: 'textareaLatest',
  input: true,
};

describe('CustomTextArea', () => {
  const props = {
    onSubmit: jest.fn(),
    language: 'ua',
    components: [textarea] as unknown as FormComponent[],
  };

  it('should render component label', () => {
    render(<Form {...props} />);
    const label = screen.getByLabelText('Text Area');
    expect(label).toBeInTheDocument();
  });
});
