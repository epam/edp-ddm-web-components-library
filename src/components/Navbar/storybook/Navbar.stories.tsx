import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Navbar, { NavbarProps } from '../Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;

const Template: Story<NavbarProps> = (args) => (
  <Navbar {...args}>
    Logo
  </Navbar>
);

export const Default = Template.bind({});
export const WithoutBackground = Template.bind({});
WithoutBackground.args = {
  disableBackground: true,
};
