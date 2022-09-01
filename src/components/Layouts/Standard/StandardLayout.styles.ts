import { createStyles, Theme } from '@material-ui/core/styles';
import { spacing } from 'styles/constants';
import type { StandardLayoutProps } from './StandardLayout';

const standardLayoutStyles = ({ colors }: Theme) => createStyles({
  container: {
    minHeight: '100vh',
  },
  header: ({ disableBackground = false }: StandardLayoutProps) => ({
    ...(!disableBackground && { backgroundColor: colors.layoutBackgroundSecondary }),
    marginLeft: `-${spacing * 4}px`,
    marginRight: `-${spacing * 4}px`,
    paddingLeft: spacing * 4,
    paddingRight: spacing * 4,
  }),
  title: ({ title, description }: StandardLayoutProps) => {
    const hasSpacing = title || description;
    return {
      ...(hasSpacing && { padding: `${spacing * 10}px 0px` }),
    };
  },
  wrap: {
    paddingLeft: spacing * 4,
    paddingRight: spacing * 4,
    marginBottom: spacing * 8,
  },
  contentWrap: {
    paddingLeft: spacing * 4,
    paddingRight: spacing * 4,
    background: colors.layoutBackgroundPrimary,
  },
  description: {
    marginTop: spacing * 3,
  },
});

export default standardLayoutStyles;
