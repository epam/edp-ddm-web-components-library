import { ThemeColors } from '../types/theme';
import { tinyText } from './text';
import { spacing } from './constants';

export const styleFormIoComponent = (className: string, colors: ThemeColors) => ({
  [`.${className}`]: {
    '& label.col-form-label': {
      ...tinyText,
      color: `${colors.textMainSecondary} !important`,
      height: spacing * 2,
      padding: 0,
    },
    '& .form-text.text-muted': {
      display: 'none',
    },
    '&.formio-error-wrapper': {
      backgroundColor: colors.layoutBackgroundPrimary,
      padding: 0,
    },
    '& .formio-errors.invalid-feedback': {
      display: 'none',
    },
    '& .field-required:after': {
      color: colors.textErrors,
    },
  },
  [`.formio-dialog ${className} p`]: {
    marginBottom: 0,
  },
});
