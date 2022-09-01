import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ErrorLayout from '../ErrorLayout';

export default {
  title: 'Components/Layouts/ErrorLayout',
  component: ErrorLayout,
} as Meta;

const Template: Story = (args) => (
  <ErrorLayout
    error={{}}
    appTitle="appTitle"
    defaultBackLinkTitle="back"
    defaultDescription="error description"
    defaultErrorTitle="defaultErrorTitle"
    defaultMessage="defaultMessage"
    reloadButtonCaption="reloadButtonCaption"
    homePath="/home"
    navLinkComponent={({ children }) => children}
    onBackLinkClick={() => null}
    {...args}
  />
);

const TemplateSystemError: Story = (args) => (
  <ErrorLayout
    error={{}}
    appTitle="appTitle"
    defaultBackLinkTitle="back"
    defaultDescription="error description"
    defaultErrorTitle="defaultErrorTitle"
    defaultMessage="defaultMessage"
    reloadButtonCaption="reloadButtonCaption"
    homePath="/home"
    navLinkComponent={({ children }) => children}
    onBackLinkClick={() => null}
    systemError={{
      title: 'System error',
      fields: [
        {
          name: 'Trace ID',
          value: '66535da7-bc2b-4966-a9b8-d45642b4fb79',
        },
        {
          name: 'Page url',
          value: 'https://test.com',
        },
      ],
    }}
    supportEmail={{
      email: 'test@test.com',
      subject: 'Subject',
      body: 'Some text body',
    }}
    sideBarContent={{
      title: 'Title',
      description: 'Description',
    }}
    {...args}
  />
);

export const Primary = Template.bind({});
export const WithSystemError = TemplateSystemError.bind({});
