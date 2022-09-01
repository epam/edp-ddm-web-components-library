import { createStyles, Theme } from '@material-ui/core';
import get from 'lodash/get';
import { styleFormIoComponent } from 'styles/form';
import { COMPONENT_CLASSES } from '../../constants';

const tableSelector = `.${COMPONENT_CLASSES.table}`;

export const createTableStyles = (theme: Theme) => ({
  [tableSelector]: {
    ...get(styleFormIoComponent(COMPONENT_CLASSES.table, theme.colors), tableSelector, {}),
    '& .table': {
      margin: `${theme.spacing(4)}px 0`,

      '& tr': {
        '&:first-child td': {
          paddingTop: 0,
        },
        '&:last-child td': {
          paddingBottom: 0,
        },
      },

      '& td': {
        padding: theme.spacing(2),
        border: 'none',

        '&:first-child': {
          paddingLeft: 0,
        },

        '&:last-child': {
          paddingRight: 0,
        },
      },
    },
    '& .form-group': {
      marginBottom: 0,
    },
  },
}) as Record<string, unknown>;

export default (theme: Theme) => createStyles({
  '@global': createTableStyles(theme),
});