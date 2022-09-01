import {
  PopperPlacementType,
} from '@material-ui/core';
import { ButtonProps } from 'components/Button/Button';
import { IconButtonProps } from 'components/IconButton/IconButton';

export interface PopperProps {
  children: React.ReactNode;
  anchorEl: { current?: HTMLElement | null };
  open: boolean;
  onClose: (open: boolean) => void
  placement?: PopperPlacementType;
  timeout?: number;
}

export type PopperButtonProps = Pick<PopperProps, 'children' | 'placement' | 'timeout'> & {
  buttonProps: ButtonProps & IconButtonProps,
  buttonType?: ButtonType,
};

export enum ButtonType {
  default = 'default',
  icon = 'icon',
}
