import { COMPONENT_CLASSES } from 'components/Form/constants'
import { spacing } from 'styles';

const columnsSelector = `.${COMPONENT_CLASSES.columns}`;

export const createColumnsStyles = () => ({
  [columnsSelector]: {
    '&.formio-component': {
      display: 'flex',
      marginLeft: `-${spacing * 2}px`,
      marginRight: `-${spacing * 2}px`,
      '& > [class^="col-"]': {
        paddingLeft: spacing * 2,
        paddingRight: spacing * 2,
      },
    },
  },
});
