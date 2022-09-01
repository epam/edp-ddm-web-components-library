import React, {
  useCallback, useRef, useState,
} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import Typography from 'components/Typography';
import MenuList from 'components/MenuList';
import MenuItem from 'components/MenuList/components/MenuItem';
import Popper from 'components/Popper';
import Button, { ButtonVariants } from 'components/Button';
import { ReactComponent as ArrowDown } from 'assets/icons/arrowDown.svg';
import styles from './AccountMenu.styles';

export interface AccountMenuProps {
  givenName?: string;
  familyName?: string;
  userName?: string;
  xpathUserInfo?: string;
  children?: React.ReactNode | Element[];
}

const useStyles = makeStyles(styles, { name: 'Menu' });

export default function AccountMenu({
  givenName = '',
  familyName = '',
  userName,
  xpathUserInfo,
  children,
}: AccountMenuProps): JSX.Element {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const anchorEl = useRef<HTMLButtonElement | null>(null);
  const handleClick = useCallback(() => {
    setOpen((prevStateOfOpen) => !prevStateOfOpen);
  }, []);

  return (
    <div className={classes.root} data-xpath={xpathUserInfo}>
      <Button
        buttonRef={anchorEl}
        variant={ButtonVariants.text}
        onClick={handleClick}
        className={classes.btn}
      >
        <Typography variant="h8" className={clsx(classes.nameBox, { [classes.active]: open })}>
          <span className={classes.name}>
            {givenName} {familyName && `${familyName.charAt(0)}.`}
          </span>
          <ArrowDown />
        </Typography>
      </Button>
      <Popper
        open={open}
        onClose={setOpen}
        anchorEl={anchorEl}
        placement="bottom-end"
      >
        <MenuList size="small">
          {userName && (
          <MenuItem>
            {userName}
          </MenuItem>
          )}
          {children}
        </MenuList>
      </Popper>
    </div>
  );
}
