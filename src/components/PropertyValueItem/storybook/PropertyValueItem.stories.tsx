import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import PropertyValueItem from '../PropertyValueItem';

export default {
  title: 'Components/PropertyValueItem',
  component: PropertyValueItem,
} as Meta;

const Template: Story = () => (
  <PropertyValueItem property="Property Text" value="Value Text" />
);

export const Default = Template.bind({});
