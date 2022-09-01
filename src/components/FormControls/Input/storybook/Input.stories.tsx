import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Input, { InputProps } from '../Input';

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    label: 'Test label',
    name: 'name',
    placeholder: 'Placeholder',
    autoComplete: 'on',
  },
} as Meta;

const Template: Story<InputProps> = (args) => (
  <Input {...args} />
);

export const Normal = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  error: {
    message: 'Error message',
  },
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  description: 'Some description',
};

export const WithInputMask = Template.bind({});
WithInputMask.args = {
  inputMask: '(999) 999-99-99',
  inputMaskPlaceholderChar: '_',
};

export const Textarea = Template.bind({});
Textarea.args = {
  textArea: {
    rows: 3,
  },
};

export const WithAutoExpandTextarea = Template.bind({});
WithAutoExpandTextarea.args = {
  textArea: {
    rows: 3,
    autoExpand: true,
  },
};

export const withNumberFormat = Template.bind({});
withNumberFormat.args = {
  requireDecimal: true,
  decimalLimit: 2,
  withNumberFormat: true,
  delimiter: true,
};
