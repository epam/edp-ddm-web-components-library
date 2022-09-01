import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Formio } from 'react-formio';

import Form, { Props } from 'components/Form/Form';
import FormioModule from 'components/Form/FormioModule';
import allInOneForm from './select-test-form.json';
// Due to a bug in the storybook all components in formioModule should have a separate export default statement
// more description and workaround is here https://github.com/storybookjs/storybook/issues/11419#issuecomment-658969643
Formio.use(FormioModule);

export default {
  title: 'Components/CustomFormioComponents/Autocomplete',
  component: Form,
  args: {
    i18n: { language: 'ua' },
    components: allInOneForm.components,
  },
  argTypes: { onSubmit: { action: 'onSubmit' } },
} as Meta;

export const Template: Story<Props> = (args) => <Form {...args} />;
