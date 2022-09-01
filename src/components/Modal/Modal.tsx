import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { WithStyles } from '@material-ui/core';

import Button from 'components/Button';

import styles from './Modal.styles';

export interface ModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  cancelText?: string;
  submitText?: string;
  title?: string | React.ReactNode;
  onSubmit?: () => void;
}

export interface Props extends WithStyles<typeof styles>, ModalProps {}

export default class Modal extends React.Component<Props> {
  handleClose = () => {
    const { onOpenChange } = this.props;
    onOpenChange(false);
  };

  render() {
    const {
      children,
      isOpen,
      title,
      cancelText,
      submitText,
      onSubmit,
      classes,
    } = this.props;

    return (
      <Dialog
        open={isOpen}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
        classes={{ paper: classes.paper }}
        style={{ zIndex: 9999 }}
      >
        { title && <DialogTitle>{title}</DialogTitle> }
        <DialogContent>
          { children }
        </DialogContent>
        <DialogActions>
          {
            cancelText && (
              <Button onClick={this.handleClose}>
                { cancelText }
              </Button>
            )
          }
          {
            submitText && (
              <Button onClick={onSubmit}>
                { submitText }
              </Button>
            )
          }
        </DialogActions>
      </Dialog>
    );
  }
}
