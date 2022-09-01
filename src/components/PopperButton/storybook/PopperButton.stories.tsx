import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ButtonVariants } from 'components/Button';
import PopperButton from 'components/PopperButton';
import Typography from 'components/Typography';
import { DEFAULT_TIMEOUT } from 'components/Popper/Popper';
import { PopperButtonProps, ButtonType } from 'types/popper';

export default {
  title: 'Components/Popper/PopperButton',
  component: PopperButton,
  argTypes: {
    timeout: {
      defaultValue: DEFAULT_TIMEOUT,
    },
  },
} as Meta;

const useStyles = makeStyles((theme: Theme) => createStyles({
  paper: {
    padding: theme.spacing(1),
  },
}));

function PopperButtonExample(args: PopperButtonProps) {
  const classes = useStyles();

  return (
    <PopperButton
      {...args}
      buttonProps={{
        children: <Typography>Toggle Popper</Typography>,
        variant: ButtonVariants.text,
      }}
    >
      <div className={classes.paper}>The content of the Popper.</div>
    </PopperButton>
  );
}

function PopperIconButtonExample(args: PopperButtonProps) {
  const classes = useStyles();

  return (
    <PopperButton
      {...args}
      buttonType={ButtonType.icon}
      buttonProps={{
        children: '<герб>',
      }}
    >
      <div className={classes.paper}>The content of the Popper.</div>
    </PopperButton>
  );
}

const PopperButtonTemplate: Story<PopperButtonProps> = (args) => (
  <PopperButtonExample {...args} />
);

const PopperIconButtonTemplate: Story<PopperButtonProps> = (args) => (
  <PopperIconButtonExample {...args} />
);

export const WithButton = PopperButtonTemplate.bind({});
export const WithIconButton = PopperIconButtonTemplate.bind({});
