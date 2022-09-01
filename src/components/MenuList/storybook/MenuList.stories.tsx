import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import MenuList, { MenuListProps } from '../MenuList';
import MenuItem from '../components/MenuItem';

export default {
  title: 'Components/MenuList',
  component: MenuList,
  args: {
  },
} as Meta;

const Template: Story<MenuListProps> = (args) => (
  <MenuList {...args}>
    <MenuItem>
      Item1
    </MenuItem>
    <MenuItem>
      Item2
    </MenuItem>
    <MenuItem>
      Item3
    </MenuItem>
  </MenuList>
);

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
