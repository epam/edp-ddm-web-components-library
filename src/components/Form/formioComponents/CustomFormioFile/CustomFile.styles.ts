import { createStyles, Theme } from '@material-ui/core';
import get from 'lodash/get';
import omit from 'lodash/omit';

import {
  bodyText, h6, spacing, smallText, tinyText, h7,
} from 'styles';
import { ThemeColors } from 'types/theme';
import { styleFormIoComponent } from 'styles/form';
import { COMPONENT_CLASSES } from '../../constants';

const fileSelector = `.${COMPONENT_CLASSES.file}`;

const styleCloseIcon = (color: string) => ({
  '& i': {
    '&:hover': {
      cursor: 'pointer',
      color,
    },
  },
});

export const createFileStyles = (colors: ThemeColors) => ({
  [fileSelector]: {
    ...get(styleFormIoComponent(COMPONENT_CLASSES.file, colors), fileSelector, {}),
    ...bodyText,
    overflowWrap: 'break-word',

    '& label.col-form-label': {
      marginBottom: spacing * 4,
      padding: 0,
      color: colors.textMainPrimary,
    },

    '& .list-group': {
      backgrount: 'transparent',
      color: colors.textMainPrimary,
    },

    '& .list-group-item': {
      ...h6,
      border: 'none',
      borderBottom: `2px solid ${colors.uIBase}`,
      padding: 0,
      paddingBottom: spacing * 1.75,
      marginBottom: spacing * 2,
      background: 'transparent',
      color: colors.textMainPrimary,

      '&:last-child': {
        borderRadius: 0,
      },

      '& strong': {
        ...smallText,
        color: colors.textMainSecondary,
      },

      '& a': {
        color: colors.textMainPrimary,
        cursor: 'pointer',
      },
      ...styleCloseIcon(colors.textErrors),
    },
    '& .fileSelector': {
      padding: `${spacing * 3}px !important`,
      border: `2px dashed ${colors.uIBase2} !important`,
      marginBottom: spacing * 2,
      textAlign: 'center',
      color: colors.textMainPrimary,

      '& a': {
        color: colors.textMainPrimary,
        textDecoration: 'underline',
        display: 'block',
      },

      '& i': {
        display: 'none',
      },

      '& .loader-wrapper': {
        display: 'none',
      },
    },
    '& .text-muted:not(i)': {
      ...tinyText,
      margin: 0,
      color: `${colors.textMainPrimary} !important`,
    },

    '& .alert-warning': {
      ...tinyText,
      backgroundColor: colors.layoutBackgroundSecondary,
    },

    '& .progress': {
      borderRadius: 2,
    },

    '& .bg-info': {
      ...tinyText,
      backgroundColor: `${colors.uIBlueBackground} !important`,
      padding: `${spacing - 4}px ${spacing}px`,
      color: colors.textMainPrimary,
    },

    '& .fileName': {
      ...h7,
      padding: 0,
      paddingLeft: spacing * 2,
      color: colors.textMainPrimary,
      overflowWrap: 'break-word',

      ...styleCloseIcon(colors.textErrors),
    },

    '& .fileSize': {
      color: colors.textMainPrimary,
    },
    '& .form-text.text-muted': {
      ...tinyText,
      display: 'flex',
      color: `${colors.textMainPrimary} !important`,
      backgroundColor: colors.uIYellowBackground,
      marginTop: spacing,
      paddingTop: spacing / 2,
      paddingBottom: spacing / 2,
      paddingLeft: spacing,
      paddingRight: spacing,
    },
    '& .formio-errors.invalid-feedback': {
      display: 'block',
      '& .error': {
        color: colors.textErrors,
      },
    },
    '& .field-content': {
      ...styleCloseIcon(colors.textErrors),
      '& img': {
        display: 'inline-block',
        overflowWrap: 'break-word',
      },
    },
  },
  ...omit(styleFormIoComponent(COMPONENT_CLASSES.file, colors), fileSelector),
}) as Record<string, unknown>;

export default ({ colors }: Theme) => createStyles({
  '@global': createFileStyles(colors),
});
