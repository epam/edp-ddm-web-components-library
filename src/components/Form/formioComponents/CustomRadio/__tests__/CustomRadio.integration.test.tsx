import React from 'react';
import { Formio } from 'react-formio';
import Form from 'components/Form/Form';
import { render, screen } from 'utils/testUtils';
import { FormComponent } from 'components/Form/types';
import { FormioModule } from 'index';

Formio.use(FormioModule);

const radio = {
  label: 'Radio',
  optionsLabelPosition: 'right',
  inline: false,
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
  key: 'radioLatest',
  type: 'radioLatest',
  input: true,
};

describe('CustomRadio', () => {
  const props = {
    onSubmit: jest.fn(),
    language: 'ua',
    components: [radio] as unknown as FormComponent[],
  };

  it('should render component label', () => {
    render(<Form {...props} />);
    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
  });
});
