import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import MenuPanel, { Props } from '../MenuPanel';

const meta = {
  title: 'Components/MenuPanel',
  component: MenuPanel,
  args: {
    title: 'Title',
    linkComponent: (props: Record<string, unknown>) => (<span {...props} />),
  },
};

const Template: Story<Props> = (args) => (
  <MenuPanel {...args} />
);

export const Simple = Template.bind({});

export const WithError = Template.bind({});
WithError.args = { hasError: true, unknownErrorText: 'Unknown error' };

export const WithCount = Template.bind({ count: 20, countDescription: 'Describe count' });
WithCount.args = { count: 20, countDescription: 'Describe count' };

export default meta as Meta;
