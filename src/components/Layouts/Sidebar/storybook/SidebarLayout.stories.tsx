import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SidebarLayout from '../SidebarLayout';

export default {
  title: 'Components/Layouts/SidebarLayout',
  component: SidebarLayout,
  args: {
    sideBarContent: 'Sidebar Text',
  },
} as Meta;

const Template: Story = (args) => (
  <SidebarLayout
    navbar="Navbar placeholder"
    title="Title"
    {...args}
  >
    Content
  </SidebarLayout>
);

export const Primary = Template.bind({});
