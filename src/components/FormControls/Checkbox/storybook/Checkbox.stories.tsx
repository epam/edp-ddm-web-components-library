import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Props } from '../Checkbox';
import Checkbox from '../index';

// TODO: connect FormioModule to be able to test custom components
// Formio.use(FormioModule);

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    value: false,
    disabled: false,
    onChange: () => {},
    label: 'label',
    id: 'id',
    required: false,
  },
} as Meta;

const Template: Story<Props> = (args) => {
  const [value1, onValue1Change] = useState(false);
  const [value2, onValue2Change] = useState(false);
  return (
    <div>
      <Checkbox {...args} value={value1} onChange={onValue1Change} />
      <Checkbox {...args} value={value2} onChange={onValue2Change} disabled />
    </div>
  );
};

export const Primary = Template.bind({});
