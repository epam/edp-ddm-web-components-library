import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import LinkMail from '../LinkMail';

export default {
  title: 'Components/LinkMail',
  component: LinkMail,
} as Meta;

const Template: Story = () => (
  <LinkMail email="test@test.com" subject="Subject" body="Some text body" />
);

export const Primary = Template.bind({});
