import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import AccountMenu, { AccountMenuProps } from '../AccountMenu';
import MenuItem from '../../MenuList/components/MenuItem';

export default {
  title: 'Components/AccountMenu',
  component: AccountMenu,
  args: {
  },
} as Meta;

const Template: Story<AccountMenuProps> = (args) => (
  <AccountMenu {...args}>
    <MenuItem onClick={() => {}}>
      Item1
    </MenuItem>
    <MenuItem onClick={() => {}}>
      Item2
    </MenuItem>
    <MenuItem>
      Item3 Plain
    </MenuItem>
  </AccountMenu>
);

export const Default = Template.bind({});
Default.args = {
  givenName: 'Ivan',
  userName: 'Ivan Ivanovich',
};
