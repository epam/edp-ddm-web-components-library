import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import StandardLayout from '../StandardLayout';

export default {
  title: 'Components/Layouts/StandardLayout',
  component: StandardLayout,
} as Meta;

const Template: Story = (args) => (
  <StandardLayout
    navbar="Navbar placeholder"
    title="Title"
    description="Description"
    {...args}
  >
    Content
  </StandardLayout>
);

export const Primary = Template.bind({});
export const WithoutBackground = Template.bind({});
WithoutBackground.args = {
  disableBackground: true,
};
