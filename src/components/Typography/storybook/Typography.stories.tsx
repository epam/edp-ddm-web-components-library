import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Typography from '../Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  args: {
    children: 'Text',
  },
} as Meta;

const Template: Story = (args) => (
  <Typography {...args} />
);

export const Primary = Template.bind({});
