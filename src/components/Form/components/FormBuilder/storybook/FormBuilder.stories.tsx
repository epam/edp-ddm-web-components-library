import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Formio } from 'react-formio';
import 'formiojs/dist/formio.full.css';
import '../styles.scss';

import FormBuilder, { FormBuilderProps } from '../FormBuilder';
import FormioModule from '../../../FormioModule';
// Due to a bug in the storybook all components in formioModule should have a separate export default statement
// more description and workaround is here https://github.com/storybookjs/storybook/issues/11419#issuecomment-658969643
Formio.use(FormioModule);

export default {
  title: 'Components/FormBuilder',
  component: FormBuilder,
} as Meta;

const Template: Story<FormBuilderProps> = (args) => {
  const [formSchema] = useState({
    display: 'form',
    components: [],
  });
  const onChange = (schema: any) => {
    console.log(schema);
  };
  return (
    <FormBuilder
      {...args}
      language="ua"
      formSchema={formSchema}
      onChange={onChange}
      localization={{
        basicTitle: 'basic',
        advancedTitle: 'advanced',
        premiumTitle: 'premium',
        autocompleteDescription: 'autocompleteDescription',
      }}
    />
  );
};

export const Primary = Template.bind({});
