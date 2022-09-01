import React, { useCallback } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import Button, { ButtonVariants } from 'components/Button';
import Divider from 'components/Divider';
import { ButtonComponent } from 'components/Form/types';
import { ReactComponent as Icon } from 'assets/icons/cancel.svg';

import clsx from 'clsx';
import styles from './ButtonGroup.styles';

export interface ButtonGroupProps {
  buttons: ButtonComponent[],
  onClick: (actionCode: string) => void,
  inline?: boolean,
}

const useStyles = makeStyles(styles, { name: 'ButtonGroup' });

export default function ButtonGroup({ buttons, inline, onClick }:ButtonGroupProps) {
  const theme = useTheme();
  const classes = useStyles();

  const isCancelButton = (buttonTheme: string): boolean => buttonTheme === 'cancel';

  const getButtonVariant = (buttonTheme: string): ButtonVariants => {
    const variant = isCancelButton(buttonTheme) ? ButtonVariants.text : buttonTheme;
    return ButtonVariants[variant as keyof typeof ButtonVariants];
  };

  const handleClick = useCallback((actionCode) => () => {
    onClick(actionCode);
  }, [onClick]);

  return (
    <Box className={classes.root}>
      <Divider color={theme.colors.uIGradient1} />
      <Box className={clsx(classes.buttonGroup, inline && classes.inline)}>
        {buttons.map((item) => (
          <Button
            key={item.key}
            variant={getButtonVariant(item.theme)}
            startIcon={isCancelButton(item.theme) && <Icon />}
            disableRipple={isCancelButton(item.theme)}
            className={classes.button}
            onClick={handleClick(item.actionCode)}
          >
            {item.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
