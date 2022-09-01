import React, { useRef, useState, useCallback } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popper, { DEFAULT_TIMEOUT } from 'components/Popper/Popper';
import Button, { ButtonVariants } from 'components/Button';
import { PopperProps } from 'types/popper';

export default {
  title: 'Components/Popper',
  component: Popper,
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

function PopperExample(args: PopperProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const handleCLick = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  return (
    <>
      <Button variant={ButtonVariants.text} onClick={handleCLick} buttonRef={ref}>Toggle Popper</Button>
      <Popper {...args} open={open} onClose={setOpen} anchorEl={ref}>
        <div className={classes.paper}>The content of the Popper.</div>
      </Popper>
    </>
  );
}

const PopperTemplate: Story<PopperProps> = (args) => (
  <PopperExample {...args} />
);

export const Default = PopperTemplate.bind({});
