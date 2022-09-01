import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ReactComponent as Icon } from 'assets/icons/plus.svg';
import Button, { ButtonProps, ButtonVariants } from '../Button';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  args: {
    children: 'Submit',
    variant: ButtonVariants.primary,
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: ButtonVariants.primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: ButtonVariants.secondary,
};

export const Text = Template.bind({});
Text.args = {
  variant: ButtonVariants.text,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const SmallSecondary = Template.bind({});
SmallSecondary.args = {
  size: 'small',
  variant: ButtonVariants.secondary,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  startIcon: <Icon />,
  variant: ButtonVariants.text,
  disableRipple: true,
};
