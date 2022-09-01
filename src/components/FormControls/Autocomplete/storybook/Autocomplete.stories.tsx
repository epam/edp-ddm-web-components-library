import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Autocomplete from '..';
import type { AutocompleteProps } from '../Autocomplete';

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  args: {
    name: 'name',
    label: 'Label',
    placeholder: 'Placeholder',
    onChange: () => {},
    options: [
      {
        label: 'item1',
        value: 'one',
      },
      {
        label: 'item2',
        value: 'two',
      },
      {
        label: 'item3',
        value: 'three',
      },
      {
        label: 'item4',
        value: 'four',
      },
    ],
  },
} as Meta;

const Template: Story<AutocompleteProps> = (args) => <Autocomplete {...args} />;

export const Normal = Template.bind({});

export const WithMultiple = Template.bind({});
WithMultiple.args = {
  multiple: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
