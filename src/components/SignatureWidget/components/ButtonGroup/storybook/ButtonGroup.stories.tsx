import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ButtonGroup, { ButtonGroupProps } from '../ButtonGroup';

const buttons = [
  {
    label: 'Submit 1',
    showValidations: false,
    tableView: false,
    key: 'submit1',
    type: 'button',
    input: true,
    action: 'navigation',
  },
  {
    label: 'Submit 2',
    showValidations: false,
    tableView: false,
    key: 'submit2',
    type: 'button',
    input: true,
    action: 'navigation',
    theme: 'secondary',
  },
  {
    label: 'Submit 3',
    showValidations: false,
    tableView: false,
    key: 'submit3',
    type: 'button',
    input: true,
    action: 'navigation',
    theme: 'cancel',
  },
];
export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  args: {
    buttons,
    inline: true,
  },
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

export const Primary = Template.bind({});
