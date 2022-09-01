import { createStyles, Theme } from '@material-ui/core';
import get from 'lodash/get';
import omit from 'lodash/omit';

import { styleFormIoComponent } from 'styles/form';
import { h7 } from 'styles';
import { COMPONENT_CLASSES } from '../../constants';

const editGridSelector = `.${COMPONENT_CLASSES.editgrid}`;

export default ({ colors, spacing }: Theme) => createStyles({
  '@global': {
    [editGridSelector]: {
      ...get(styleFormIoComponent(COMPONENT_CLASSES.editgrid, colors), editGridSelector, {}),
      '& label.col-form-label': {
        ...h7,
        color: colors.textMainPrimary,
      },
    },
    ...omit(styleFormIoComponent(COMPONENT_CLASSES.editgrid, colors), editGridSelector),
  },
  root: {
    color: colors.textMainPrimary,
  },
  table: {
    marginBottom: '20px',
  },
  tableInner: {
    borderBottom: `2px solid ${colors.uIBase}`,
  },
  cell: {
    height: spacing(9) + 2,
    boxSizing: 'border-box',
  },
  row: {
    position: 'relative',
    borderBottom: `2px solid ${colors.uIBase}`,
  },
  form: {
    width: spacing(80),
    '& .formio-component-submit': {
      display: 'inline-block',
      marginRight: spacing(3),
    },
    '& .formio-component-cancel': {
      display: 'inline-block',
    },
  },
  modal: {
    'max-width': spacing(100),
  },
  deleteModalButton: {
    marginRight: spacing(3),
    display: 'inline-block',
  },
  deleteConfirmationRoot: {
    width: spacing(80),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  deleteModalTitle: {
    marginBottom: spacing(6),
    marginTop: spacing(3),
  },
  actionsCell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    background: colors.layoutBackgroundPrimary,
    border: 'none',
  },
  addButton: {
    border: 'none',
    backgroundColor: 'transparent',
  },
});
