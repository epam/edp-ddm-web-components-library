import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Formio } from 'react-formio';
import FormioModule from 'components/Form/FormioModule';
import Form, { Props } from 'components/Form/Form';
import { components, withCustomDefaultValue, withCalculatedValue, withCondition } from './constants';
import { FormComponent } from 'components/Form/types';

Formio.use(FormioModule);

export default {
  title: 'Components/CustomFormioComponents/Checkbox',
  component: Form,
  args: {
    components,
    language: 'ua',
    argTypes: { onSubmit: { action: 'onSubmit' } },
  },
} as Meta;

const Template: Story<Props> = (args) => <Form {...args} />;

export const Default = Template.bind({});

export const CustomDefaultValue = Template.bind({});
CustomDefaultValue.args = {
  components: withCustomDefaultValue as FormComponent[],
};

export const CalculatedValue = Template.bind({});
CalculatedValue.args = {
  components: withCalculatedValue as FormComponent[],
};

export const Condition = Template.bind({});
Condition.args = {
  components: withCondition as FormComponent[],
};