import { createStyles, Theme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { h7, spacing } from 'styles';

const styles = ({ colors }: Theme) => createStyles({
  root: {
    width: '100%',
  },
  radioGroupRoot: {
    width: 'fit-content',
  },
  radio: {
    padding: spacing,
    marginRight: spacing,
    '& circle': {
      stroke: colors.uIBase,
    },
    '&:hover': {
      backgroundColor: fade(colors.uIBase, 0.12),
    },
    '& svg': {
      verticalAlign: 'middle',
    },
  },
  disabled: {
    '& span': {
      color: `${fade(colors.uIBase, 0.25)} !important`,
    },
    '& circle': {
      stroke: colors.uIIconDisabled,
      '&:nth-child(2)': {
        fill: colors.uIIconDisabled,
      },
    },
  },
  label: {
    ...h7,
    marginLeft: 0,
    marginBottom: spacing,
    color: colors.textMainPrimary,

    '&&': {
      display: 'inline-flex',
    },
  },
});

export default styles;
