import React from 'react';
import { Formio } from 'react-formio';
import Form from 'components/Form/Form';
import { render, screen } from 'utils/testUtils';
import { FormComponent } from 'components/Form/types';
import { FormioModule } from 'index';

Formio.use(FormioModule);

const selectBoxes = {
  label: 'Select Boxes',
  optionsLabelPosition: 'right',
  tableView: false,
  values: [
    {
      label: 'item1',
      value: 'item1',
      shortcut: '',
    },
    {
      label: 'item2',
      value: 'item2',
      shortcut: '',
    },
  ],
  key: 'selectboxes',
  type: 'selectboxes',
  input: true,
  inputType: 'checkbox',
};

describe('CustomSelectBoxes', () => {
  const props = {
    onSubmit: jest.fn(),
    language: 'ua',
    components: [selectBoxes] as unknown as FormComponent[],
  };

  it('should render component label', () => {
    render(<Form {...props} />);
    const label = screen.getByText('Select Boxes');
    expect(label).toBeInTheDocument();
  });
});
