import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Formio } from 'react-formio';
import FormioModule from 'components/Form/FormioModule';
import Form, { Props } from 'components/Form/Form';
import { FormComponent } from 'components/Form/types';
import { fieldSet as components, fieldSetCollapsible, fieldSetCollapsed } from './constants';

Formio.use(FormioModule);

export default {
  title: 'Components/CustomFormioComponents/Fieldset',
  component: Form,
  args: {
    components,
    language: 'ua',
    argTypes: { onSubmit: { action: 'onSubmit' } },
  },
} as Meta;

const Template: Story<Props> = (args) => <Form {...args} />;

export const Default = Template.bind({});
export const Collapsible = Template.bind({});
Collapsible.args = {
  components: fieldSetCollapsible as FormComponent[],
};
export const Collapsed = Template.bind({});
Collapsed.args = {
  components: fieldSetCollapsed as FormComponent[],
};