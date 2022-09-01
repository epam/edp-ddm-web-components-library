import { createStyles, Theme } from '@material-ui/core';
import get from 'lodash/get';
import omit from 'lodash/omit';

import { h7, spacing } from 'styles';
import { styleFormIoComponent } from 'styles/form';
import { COMPONENT_CLASSES } from '../../constants';

const radioSelector = `.${COMPONENT_CLASSES.radio}`;

export default ({ colors }: Theme) => createStyles({
  '@global': {
    [radioSelector]: {
      ...get(styleFormIoComponent(COMPONENT_CLASSES.radio, colors), radioSelector, {}),
      '& label.col-form-label': {
        ...h7,
        display: 'inline-block',
        marginBottom: spacing,
        color: colors.textMainPrimary,
      },
    },
    ...omit(styleFormIoComponent(COMPONENT_CLASSES.radio, colors), radioSelector),
  },
});
