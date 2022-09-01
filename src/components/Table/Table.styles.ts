import { createStyles, Theme } from '@material-ui/core/styles';

import { h6 } from 'styles/text';

const styles = ({ colors, spacing }: Theme) => createStyles({
  root: {
    width: '100%',
  },
  table: {
    minWidth: 750,
    tableLayout: 'fixed',
  },
  placeholder: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: spacing(6),
  },
  placeholderInline: {
    paddingBottom: spacing(3),
    paddingTop: spacing(2),
    alignItems: 'start',
  },
  placeholderText: {
    color: colors.textMainSecondary,
    marginTop: spacing(1),
  },
  cell: {
    ...h6,
    wordBreak: 'break-word',
    verticalAlign: 'top',
    paddingTop: spacing(3),
    paddingBottom: spacing(3),
    borderBottom: `2px solid ${colors.uIBase}`,
    '&:first-child': {
      paddingLeft: 0,
    },
    '&:last-child': {
      paddingRight: 0,
    },
  },
  row: {},
  cellLarge: {
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
  },
  paginationToolbar: {
    alignItems: 'baseline',
  },
  paginationCaption: {
    marginRight: spacing(4.5),
  },
  paginationSelect: {
    marginLeft: spacing(1),
    marginRight: spacing(6),
    '& svg': {
      fill: colors.uIBase,
    },
  },
  paginationSelectMenu: {
    background: colors.dropmenuBackground,
    '& li:hover': {
      background: `${colors.dropmenuHover} !important`,
    },
  },
  paginationRoot: {
    '& .MuiIconButton-root.Mui-disabled': {
      color: colors.uIIconDisabled,
    },
  },
});

export default styles;
