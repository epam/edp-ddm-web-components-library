import React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';

import styles from './Modal.styles';
import Modal, { ModalProps } from './Modal';

interface Props extends ModalProps {
  classes?: Partial<WithStyles<typeof styles>['classes']>;
}

export default withStyles(styles)(Modal) as React.ComponentClass<Props>;
