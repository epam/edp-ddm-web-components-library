import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import SignatureWidget from '..';
import { SignatureWidgetProps } from '../SignatureWidget';

export default {
  title: 'Components/SignatureWidget',
  component: SignatureWidget,
  args: {
    signWidgetUri: 'https://eu.iit.com.ua/sign-widget/v20200922/',
    changeKeyButtonCaption: 'signWidget.changeKeyButton',
    signButtonCaption: 'signWidget.signButton',
    signDataTitle: 'signWidget.signDataTitle',
    readKeyTitle: 'signWidget.readKeyTitle',
    organizationCaption: 'signWidget.organization',
    rnokppCaption: 'signWidget.rnokpp',
    edrpouCaption: 'signWidget.edrpou',
    dataToSign: { someVar: 'to sign ' },
    onSignText: () => undefined,
  },
} as Meta;

const Template: Story<SignatureWidgetProps> = (args) => <SignatureWidget {...args} />;

export const Simple = Template.bind({});
