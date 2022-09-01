import { createStyles, Theme } from '@material-ui/core';

import { styleFormIoComponent } from 'styles/form';
import { COMPONENT_CLASSES } from '../../constants';

export default ({ colors }: Theme) => createStyles({
  '@global': styleFormIoComponent(COMPONENT_CLASSES.textarea, colors),
});
