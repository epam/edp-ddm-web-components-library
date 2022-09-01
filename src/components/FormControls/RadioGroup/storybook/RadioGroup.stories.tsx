import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import RadioGroup from '..';
import { RadioGroupProps } from '../RadioGroup';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  args: {
    items: [
      {
        label: 'test1',
        value: 'test1',
      },
      {
        label: 'test2',
        value: 'test2',
      },
    ],
  },
} as Meta;

const Template: Story<RadioGroupProps> = (args) => {
  const [value, setValue] = useState('');
  return <RadioGroup {...args} value={value} onChange={setValue} />;
};

export const Normal = Template.bind({});
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
