import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import IconButton from '../IconButton';

export default {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
} as Meta;

const Template: Story = (args) => <IconButton {...args}>{'<герб>'}</IconButton>;

export const Primary = Template.bind({});
