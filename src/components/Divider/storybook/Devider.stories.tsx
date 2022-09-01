import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Divider from '../Divider';

export default {
  title: 'Components/Divider',
  component: Divider,
} as Meta;

const Template: Story = (args) => <Divider {...args} />;

export const Primary = Template.bind({});
