/* eslint-disable max-len */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Formio } from 'react-formio';
import {
  editGridComponents,
} from './constants';
import FormioModule from 'components/Form/FormioModule';
import Form, { Props } from 'components/Form/Form';


// Due to a bug in the storybook all components in formioModule should have a separate export default statement
// more description and workaround is here https://github.com/storybookjs/storybook/issues/11419#issuecomment-658969643
Formio.use(FormioModule);
Formio.setBaseUrl('http://localhost:3002');

export default {
  title: 'Components/CustomFormioComponents/EditGrid',
  component: Form,
  args: {
    language: 'ua',
    components: editGridComponents,
  },
  argTypes: { onSubmit: { action: 'onSubmit' } },
} as Meta;

export const Template: Story<Props> = (args) => <Form {...args} />;




