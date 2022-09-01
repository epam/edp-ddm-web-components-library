import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Loader from '../Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
  args: {
    show: true,
  },
} as Meta;

const Template: Story = (args) => (
  <Loader {...args} />
);

export const Primary = Template.bind({});
