import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ReactComponent as ArrowLeftIcon } from 'assets/icons/arrowLeft.svg';

import InlineButton from '../InlineButton';

export default {
  title: 'Components/InlineButton',
  component: InlineButton,
} as Meta;

const Template: Story = (args) => (
  <InlineButton {...args}>
    Button text
  </InlineButton>
);

export const Medium = Template.bind({});
export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
export const SmallWithIcon = Template.bind({});
SmallWithIcon.args = {
  size: 'small',
  leftIcon: <ArrowLeftIcon width={24} height={24} />,
};
