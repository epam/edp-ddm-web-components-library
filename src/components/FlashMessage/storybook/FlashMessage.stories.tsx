import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import FlashMessage, { ViewType } from '../FlashMessage';

export default {
  title: 'Components/FlashMessage',
  component: FlashMessage,
} as Meta;

const Template: Story = (args) => (
  <FlashMessage
    status="none"
    title="Title"
    message="Message"
    {...args}
  />
);

export const Success = Template.bind({});
Success.args = {
  status: 'success',
  viewType: ViewType.notification,
};
export const Warning = Template.bind({});
Warning.args = {
  status: 'warning',
  viewType: ViewType.notification,
};
export const Error = Template.bind({});
Error.args = {
  status: 'error',
  viewType: ViewType.notification,
};
export const Banner = Template.bind({});
Banner.args = {
  status: 'error',
  viewType: ViewType.plain,
  onClose: false,
};
