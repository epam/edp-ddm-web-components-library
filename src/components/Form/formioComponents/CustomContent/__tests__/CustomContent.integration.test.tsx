import React from 'react';
import { Formio } from 'react-formio';
import Form from 'components/Form/Form';
import { render, screen } from 'utils/testUtils';
import { FormComponent } from 'components/Form/types';
import { FormioModule } from 'index';

Formio.use(FormioModule);

const content = {
  label: 'Content',
  refreshOnChange: false,
  key: 'contentLatest',
  type: 'contentLatest',
  input: false,
  tableView: false,
  hideContentLabel: false,
};

describe('CustomContent', () => {
  const props = {
    onSubmit: jest.fn(),
    language: 'ua',
    components: [content] as unknown as FormComponent[],
  };

  it('should render component with label', () => {
    render(<Form {...props} />);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should render component without label', () => {
    render(<Form
      {...props}
      components={[
        {
          ...content,
          hideContentLabel: true,
        } as unknown as FormComponent,
      ]}
    />);
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });
});
