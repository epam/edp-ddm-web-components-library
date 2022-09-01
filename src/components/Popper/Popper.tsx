import React, { useCallback } from 'react';
import {
  ClickAwayListener,
  Grow,
  makeStyles,
  Paper,
  Popper as MuiPopper,
} from '@material-ui/core';
import { PopperProps } from 'types/popper';
import { spacing } from 'styles';
import styles from './Popper.styles';

export const DEFAULT_TIMEOUT = 300;

const useStyles = makeStyles(styles, { name: 'Popper' });

export default function Popper({
  anchorEl, children, open, onClose, placement, timeout = DEFAULT_TIMEOUT,
}: PopperProps) {
  const classes = useStyles();

  const handleClose = useCallback(() => {
    onClose(false);
  }, [onClose]);

  return (
    <MuiPopper
      open={open}
      anchorEl={anchorEl.current}
      placement={placement}
      transition
      popperOptions={{
        modifiers: {
          offset: {
            offset: `0, ${spacing / 2}`,
          },
        },
      }}
    >
      <Grow
        in={open}
        {...(open ? { timeout } : {})}
      >
        <Paper className={classes.paper}>
          <ClickAwayListener onClickAway={handleClose}>
            {children}
          </ClickAwayListener>
        </Paper>
      </Grow>
    </MuiPopper>
  );
}
