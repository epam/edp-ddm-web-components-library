import React from 'react';
import { Formio } from 'react-formio';
import Form from 'components/Form/Form';
import { render, screen } from 'utils/testUtils';
import { FormComponent } from 'components/Form/types';
import { FormioModule } from 'index';

Formio.use(FormioModule);

const button = {
  'type': 'button',
  'label': 'Submit',
  'key': 'submit',
  'disableOnInvalid': true,
  'input': true,
  'tableView': false,
};

describe('CustomButton', () => {
  const props = {
    onSubmit: jest.fn(),
    language: 'ua',
    components: [button] as unknown as FormComponent[],
  };

  it('should render component with label', () => {
    render(<Form {...props} />);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});
