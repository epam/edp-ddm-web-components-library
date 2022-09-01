import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Switch, { SwitchProps } from '../Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  args: {
    value: false,
    name: 'name',
  },
} as Meta;

function Example(props: SwitchProps) {
  const { value: defaultValue } = props;
  const [value, setValue] = useState(defaultValue);
  return (
    <>
      <Switch value={value} onChange={setValue} />
      Status: {value.toString()}
    </>
  );
}

const Template: Story<SwitchProps> = (args) => (
  <Switch {...args} />
);

const TemplateExample: Story<SwitchProps> = (args) => (
  <Example {...args} />
);

export const Default = Template.bind({});
export const SwitchExample = TemplateExample.bind({});
