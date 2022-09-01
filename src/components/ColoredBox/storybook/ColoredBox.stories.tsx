import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ColoredBox from '../ColoredBox';

export default {
  title: 'Components/ColoredBox',
  component: ColoredBox,
} as Meta;

const Template: Story = () => (
  <ColoredBox>Box Content</ColoredBox>
);

export const Default = Template.bind({});
