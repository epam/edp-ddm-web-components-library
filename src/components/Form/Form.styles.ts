import { createStyles, Theme } from '@material-ui/core/styles';

import { spacing } from 'styles/constants';

const styles = (theme: Theme) => createStyles({
  root: {
    '& .alert': {
      display: 'none',
    },
    '& div.file .alert': {
      display: 'block',
    },
    '& .help-block': {
      display: 'none',
    },
    '& .submit-fail': {
      '&:after': {
        display: 'none',
      },
    },
    '& .choices__item.choices__item--selectable': {
      whiteSpace: 'normal',
    },
    '& .form-control.dropdown[disabled]': {
      backgroundColor: theme.colors.uIBlueBackground,
      opacity: 1,
    },
    '& .editgrid-listgroup': {
      marginBottom: spacing * 2,
      overflowX: 'auto',
      overflowY: 'hidden',
      display: 'grid',

      '& .list-group-item': {
        '& .formio-component': {
          maxWidth: '40vw',
        },
        '& .row': {
          display: 'inline-grid',
          gridAutoFlow: 'column',
          gridAutoColumns: spacing * 25,
          '& div': {
            maxWidth: 'none',
          },
        },
      },
    },
    // TODO: remove this after full tooltip customization
    '& .tooltip': {
      position: 'absolute',
      zIndex: 1070,
      display: 'block',
      margin: 0,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 1.5,
      textAlign: 'start',
      textDecoration: 'none',
      textShadow: 'none',
      textTransform: 'none',
      letterSpacing: 'normal',
      wordBreak: 'normal',
      wordSpacing: 'normal',
      whiteSpace: 'normal',
      lineBreak: 'auto',
      fontSize: '0.875rem',
      wordWrap: 'break-word',
      opacity: 0,
      '& .tooltip-inner': {
        maxWidth: 200,
        padding: '0.25rem 0.5rem',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#000',
        borderRadius: '0.25rem',
      },
    },
  },
});

export default styles;
