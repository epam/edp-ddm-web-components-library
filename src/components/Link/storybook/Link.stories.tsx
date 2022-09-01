import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Link from '../Link';

export default {
  title: 'Components/Link',
  component: Link,
} as Meta;

const Template: Story = (args) => (
  <Link to="/test" component={(props) => (<span {...props} />)} {...args}>
    Link
  </Link>
);

export const Primary = Template.bind({});
