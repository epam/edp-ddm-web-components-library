import { createStyles, Theme } from '@material-ui/core';
import get from 'lodash/get';
import { h5 } from 'styles';
import { styleFormIoComponent } from 'styles/form';
import { COMPONENT_CLASSES } from '../../constants';

const fieldsetSelector = `.${COMPONENT_CLASSES.fieldset}`;

export const createFieldSetStyles = (theme: Theme) => ({
  [fieldsetSelector]: {
    ...get(styleFormIoComponent(COMPONENT_CLASSES.fieldset, theme.colors), fieldsetSelector, {}),
    '& .formio-component': {
      marginBottom: theme.spacing(4),
    },
    '& .formio-component:last-child': {
      marginBottom: 0,
    },
    '& fieldset': {
      margin: `${theme.spacing(6)}px 0`,
    },
    '& legend': {
      ...h5,
      marginBottom: theme.spacing(4),
    },
    '& .formio-clickable': {
      '& img': {
        borderRadius: '50%',
        marginLeft: theme.spacing(1),
        '&:hover': {
          background: theme.colors.uIIconHoverArea,
          boxShadow: `0px 0px 0px ${theme.spacing(1)}px ${theme.colors.uIIconHoverArea}`,
        },
      },
    },
    '& .non-collapsed img': {
      transform: 'rotate(180deg)',
    },
  },
}) as Record<string, unknown>;

export default (theme: Theme) => createStyles({
  '@global': createFieldSetStyles(theme),
});
