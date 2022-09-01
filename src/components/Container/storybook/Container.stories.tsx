import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Container from '../Container';
import styles from './Container.stories.styles';

const useStyles = makeStyles(styles, { name: 'ContainerStory' });

export default {
  title: 'Components/Container',
  component: Container,
} as Meta;

const Template: Story = (args) => {
  const classes = useStyles();
  return <Container><div className={classes.content} {...args}> Content </div></Container>;
};

export const Primary = Template.bind({});
