import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Formio } from 'react-formio';

import Form, { Props } from '../Form';
import {
  components,
} from './constants';
import FormioModule from '../FormioModule';

// Due to a bug in the storybook all components in formioModule should have a separate export default statement
// more description and workaround is here https://github.com/storybookjs/storybook/issues/11419#issuecomment-658969643
Formio.use(FormioModule);
Formio.setBaseUrl('http://localhost:3002');

export default {
  title: 'Components/Form',
  component: Form,
  args: {
    language: 'ua',
    components,
  },
  argTypes: { onSubmit: { action: 'onSubmit' } },
} as Meta;

const Template: Story<Props> = (args) => <Form {...args} />;

export const Primary = Template.bind({});
