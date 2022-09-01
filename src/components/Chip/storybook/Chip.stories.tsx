import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Chip, { ChipProps } from '../Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
  args: {
    isSelected: false,
    title: 'Chip title',
    icon: <>👋</>,
  },
} as Meta;

const Template: Story<ChipProps> = (args) => <Chip {...args} />;

export const Normal = Template.bind({});

export const Selected = Template.bind({});
Selected.args = {
  isSelected: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
