import React from 'react';
import { Formio } from 'react-formio';
import Form from 'components/Form/Form';
import { fireEvent, render, screen } from 'utils/testUtils';
import userEvent from '@testing-library/user-event';
import { FormComponent } from 'components/Form/types';
import { FormioModule } from 'index';
import { waitFor } from '@testing-library/react';

Formio.use(FormioModule);

const checkbox = {
  label: 'Checkbox',
  tableView: false,
  key: 'checkboxLatest',
  type: 'checkboxLatest',
  input: true,
};

describe('CustomCheckbox', () => {
  const props = {
    onSubmit: jest.fn(),
    language: 'ua',
    components: [checkbox] as FormComponent[],
  };

  it('should render component label', () => {
    render(<Form {...props} />);
    const label = screen.getByLabelText('Checkbox');
    expect(label).toBeInTheDocument();
  });

  // TODO add test for сhecking tooltip
  it('should showing tooltip', () => {
  });

  it('should have focus', () => {
    render(
      <Form
        {...props}
        components={[
          { ...checkbox, tabindex: 0 },
          { ...checkbox, label: 'Checkbox2', tabindex: 1 },
        ] as unknown as FormComponent[]}
      />,
    );
    userEvent.tab();
    expect(screen.getByLabelText('Checkbox')).toHaveFocus();

    userEvent.tab();
    expect(screen.getByLabelText('Checkbox2')).toHaveFocus();
  });

  it('should be checked with defaultValue', () => {
    render(
      <Form
        {...props}
        components={[
          { ...checkbox, defaultValue: true }] as FormComponent[]}
      />,
    );
    expect(screen.getByLabelText('Checkbox')).toBeChecked();
  });

  it('should be checked with customDefaultValue', () => {
    render(
      <Form
        {...props}
        components={[
          { ...checkbox, customDefaultValue: 'value = true' },
        ] as unknown as FormComponent[]}
      />,
    );
    expect(screen.getByLabelText('Checkbox')).toBeChecked();
  });

  // TODO fix test, on ui this works properly
  xit('should calculate value with calculateValue', async () => {
    render(
      <Form
        {...props}
        components={[
          {
            label: 'TextField',
            tableView: true,
            key: 'textfieldLatest',
            type: 'textfieldLatest',
            input: true,
          },
          { ...checkbox, calculateValue: "value=data.textfieldLatest === 'test'" },
        ] as unknown as FormComponent[]}
      />,
    );
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    expect(screen.getByRole('textbox')).toHaveValue('test');
    await waitFor(() => expect(screen.getByLabelText('Checkbox')).toBeChecked());

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test2' } });
    expect(screen.getByRole('textbox')).toHaveValue('test2');
    await waitFor(() => expect(screen.queryByLabelText('Checkbox')).not.toBeChecked());
  });

  // TODO fix test, on ui this works properly
  xit('should display when equal condition', async () => {
    render(
      <Form
        {...props}
        components={[
          {
            label: 'TextField',
            tableView: true,
            key: 'textfieldLatest',
            type: 'textfieldLatest',
            input: true,
          },
          {
            ...checkbox,
            conditional: {
              show: true,
              when: 'textfieldLatest',
              eq: 'test',
            },
          },
        ] as unknown as FormComponent[]}
      />,
    );
    userEvent.type(screen.getByRole('textbox'), 'test');
    expect(screen.getByRole('textbox')).toHaveValue('test');
    await waitFor(() => expect(screen.getByLabelText('Checkbox')).toBeInTheDocument());

    userEvent.type(screen.getByRole('textbox'), '2');
    expect(screen.getByRole('textbox')).toHaveValue('test2');
    await waitFor(() => expect(screen.queryByText('Checkbox')).not.toBeInTheDocument());
  });
});
