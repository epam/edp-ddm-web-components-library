import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import LinkBack from '../LinkBack';

export default {
  title: 'Components/LinkBack',
  component: LinkBack,
} as Meta;

const Template: Story = (args) => (
  <LinkBack to="/test" title="Back" component={(props) => <span {...props} />} {...args} />
);

export const Primary = Template.bind({});
