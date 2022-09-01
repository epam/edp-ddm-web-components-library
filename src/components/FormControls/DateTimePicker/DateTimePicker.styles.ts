import { createStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import {
  spacing,
  bodyText,
  tinyText,
  smallText,
} from 'styles';

const styles = ({ colors }: Theme) => createStyles({
  calendar: {
    background: colors.dropmenuBackground,
    color: colors.textMainPrimary,
    '&.datepickerStyles': {
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
      borderRadius: '2px',
      border: 'none',
      marginTop: spacing / 2,
      background: colors.dropmenuBackground,

      '& button': {
        '&:focus-visible': {
          outline: `2px dashed ${colors.focusOutline}`,
          borderRadius: spacing / 2,
        },
      },

      '& .react-datepicker__week': {
        marginLeft: spacing / 4,
        marginRight: spacing / 4,
      },

      '& .react-datepicker__day': {
        ...smallText,
        height: spacing * 5,
        width: spacing * 5,
        paddingTop: '11px',
        boxSizing: 'border-box',
        margin: spacing / 4,
        borderRadius: '2px',
        border: '1px solid transparent',
        color: colors.textMainPrimary,
        outline: 'none',

        '&:hover': {
          backgroundColor: colors.dropmenuHover,
        },

        '&--disabled': {
          color: colors.textMainSubtle,
          background: colors.textAlternatePrimary,
          '&:hover': {
            backgroundColor: colors.textAlternatePrimary,
            cursor: 'not-allowed',
          },
        },
      },
      '& .react-datepicker__day--selected': {
        backgroundColor: colors.dropmenuSelected,
        color: colors.textMainPrimary,
        '&:focus-visible': {
          border: `1px dashed ${colors.textMainSecondary}`,
        },
 
      },
      '& .react-datepicker__day--keyboard-selected': {
        backgroundColor: colors.uIBase6,
        color: colors.textMainPrimary,
        borderColor: colors.textMainSecondary,
      },
      '& .react-datepicker__day--keyboard-selected:not(.react-datepicker__day--today)': {
        color: colors.textMainPrimary,
        outline: `1px dashed ${colors.focusOutline}`,
        outlineOffset: 1,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
      '& .react-datepicker__day--keyboard-selected.react-datepicker__day--today': {
        '&:focus-visible': {
          outline: `1px dashed ${colors.focusOutline}`,
          outlineOffset: 1,
        },
      },
      '& .react-datepicker__day--today': {
        borderColor: colors.textMainSecondary,
        fontWeight: 'normal',
      },
      '& .react-datepicker__day-name': {
        ...tinyText,
        textTransform: 'capitalize',
        color: colors.textMainSecondary,
        height: spacing * 3,
        width: spacing * 5,
        boxSizing: 'border-box',
        margin: spacing / 4,
        paddingTop: spacing / 2,
      },
      '& .react-datepicker__day-names': {
        paddingTop: spacing,
        paddingBottom: 0,
      },
      '& .react-datepicker__day--outside-month': {
        visibility: 'hidden',
      },
      '& .react-datepicker__triangle': {
        display: 'none',
      },
      '& .react-datepicker__header': {
        background: 'none',
        borderBottom: 'none',
        paddingTop: spacing,
        paddingBottom: 0,
      },
      '& .react-datepicker__month': {
        margin: 0,
        color: colors.textMainPrimary,
      },
      '& .react-datepicker__navigation': {
        top: spacing,
        height: spacing * 5,
        width: spacing * 5,

        '&:hover .react-datepicker__navigation-icon:before': {
          borderColor: colors.uIIconHovered,
        },
      },
      '& .react-datepicker__navigation-icon': {
        top: '1px',
        left: 0,
        right: 0,

        '&:before': {
          borderColor: colors.uIIconBase,
        },
      },
      '& .react-datepicker__navigation--previous': {
        left: spacing,
      },
      '& .react-datepicker__navigation--next': {
        right: spacing,
      },
      '& .react-datepicker__current-month': {
        ...bodyText,
        paddingTop: spacing,
        paddingBottom: spacing,
        fontWeight: 'normal',
        textTransform: 'capitalize',
        color: colors.textMainPrimary,
      },
      '& .react-datepicker-time__caption': {
        display: 'none',
      },
      '& .react-datepicker__input-time-container': {
        margin: 0,
        marginTop: spacing,
      },
      '& .react-datepicker-time__input-container': {
        display: 'block',
        paddingRight: spacing,
      },
      '& .react-datepicker-time__input-container .react-datepicker-time__input': {
        display: 'block',
      },
    },
  },
});

export default styles;
