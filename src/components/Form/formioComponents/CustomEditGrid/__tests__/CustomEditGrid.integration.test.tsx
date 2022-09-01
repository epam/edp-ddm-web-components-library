import React from 'react';
import { Formio } from 'react-formio';
import Form from 'components/Form/Form';
import { render, screen } from 'utils/testUtils';
import { FormComponent } from 'components/Form/types';
import { FormioModule } from 'index';

Formio.use(FormioModule);

const editGrid = {
  label: 'Edit Grid',
  tableView: false,
  rowDrafts: false,
  key: 'editGridLatest',
  type: 'editGridLatest',
  displayAsTable: false,
  input: true,
  components: [
    {
      label: 'Text Field',
      tableView: true,
      key: 'textfieldLatest',
      type: 'textfieldLatest',
      input: true,
    },
  ],
};

describe('CustomEditGrid', () => {
  const props = {
    onSubmit: jest.fn(),
    language: 'ua',
    components: [editGrid] as unknown as FormComponent[],
  };

  it('should render component label', () => {
    render(<Form {...props} />);
    const label = screen.getByText('Edit Grid');
    expect(label).toBeInTheDocument();
  });
});
