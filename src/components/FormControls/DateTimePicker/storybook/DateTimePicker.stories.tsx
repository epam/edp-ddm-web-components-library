import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Props } from '../DateTimePicker';
import DateTimePicker from '../index';

export default {
  title: 'Components/DateTime Picker',
  component: DateTimePicker,
  args: {
    value: false,
    disabled: false,
    onChange: () => {},
    label: 'label',
    id: 'id',
    name: 'name',
    placeholder: 'placeholder',
    inputDisabled: false,
  },
} as Meta;

const Template: Story<Props> = (args) => {
  const [value1, onValue1Change] = useState<string | null>(null);
  return (
    <div>
      <DateTimePicker {...args} value={value1} onChange={onValue1Change} />
    </div>
  );
};

export const Primary = Template.bind({});
