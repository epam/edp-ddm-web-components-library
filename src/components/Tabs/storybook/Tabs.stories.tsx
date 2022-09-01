import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Tabs, { TabPanel } from '..';
import { TabsProps } from '../Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  args: {
  },
} as Meta;

const Template: Story<TabsProps> = (args) => (
  <Tabs {...args}>
    <TabPanel code="1" title="First Tab">
      <h3>Tab1 content</h3>
    </TabPanel>
    <TabPanel code="2" title="Second Tab">
      <h3>Tab2 content</h3>
    </TabPanel>
    <TabPanel code="2" title="Disabled Tab" disabled />
  </Tabs>
);

export const Main = Template.bind({});

Main.args = {
};

export const WithoutBackground = Template.bind({});

WithoutBackground.args = {
  disableBackground: true,
};
