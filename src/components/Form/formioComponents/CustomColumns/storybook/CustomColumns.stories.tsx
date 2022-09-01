import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Formio } from 'react-formio';

import Form, { Props } from 'components/Form/Form';
import { FormComponent, FormSubmission } from 'components/Form/types';
import FormioModule from 'components/Form/FormioModule';
import columnsForm from './columns-latest.json';
// Due to a bug in the storybook all components in formioModule should have a separate export default statement
// more description and workaround is here https://github.com/storybookjs/storybook/issues/11419#issuecomment-658969643
Formio.use(FormioModule);

export default {
  title: 'Components/CustomFormioComponents/Columns',
  component: Form,
  args: {
    i18n: { language: 'ua' },
    onSubmit: (submission: FormSubmission) => console.log(submission),
  },
} as Meta;

const Template: Story<Props> = (args) => <Form {...args} />;
export const ColumnsWithTextfield = Template.bind({});

ColumnsWithTextfield.args = {
  components: columnsForm.components as unknown as FormComponent[],
};
