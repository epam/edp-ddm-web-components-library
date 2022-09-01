import React, { useCallback, useRef } from 'react';
import Popper from 'components/Popper';
import MdtuButton from 'components/Button';
import IconButton from 'components/IconButton';
import { ButtonType, PopperButtonProps } from 'types/popper';

const ButtonComponents = {
  default: MdtuButton,
  icon: IconButton,
};

export default function PopperButton({
  children, placement, timeout, buttonProps, buttonType,
}: PopperButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleClick = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  const Button = ButtonComponents[buttonType || ButtonType.default];
  return (
    <>
      <Button
        {...buttonProps}
        buttonRef={buttonRef}
        onClick={handleClick}
      />
      <Popper
        open={open}
        anchorEl={buttonRef}
        placement={placement}
        timeout={timeout}
        onClose={handleClose}
      >
        {children}
      </Popper>
    </>
  );
}
