import React from 'react';
import { Formio } from 'react-formio';
import Form from 'components/Form/Form';
import { render, screen } from 'utils/testUtils';
import { FormComponent } from 'components/Form/types';
import { FormioModule } from 'index';

Formio.use(FormioModule);

const table =  {
  'label': 'Table',
  'cellAlignment': 'left',
  'key': 'table',
  'type': 'tableLatest',
  'input': false,
  'tableView': false,
  'rows': [
    [
      {
        'components': [
          {
            'label': 'Text Field',
            'tableView': true,
            'key': 'textField',
            'type': 'textfieldLatest',
            'input': true,
          },
        ],
      },
    ],
  ],
};

describe('CustomTable', () => {
  const props = {
    onSubmit: jest.fn(),
    language: 'ua',
    components: [table] as unknown as FormComponent[],
  };

  it('should render component with label', () => {
    render(<Form {...props} />);
    expect(screen.getByText('Text Field')).toBeInTheDocument();
  });
});
