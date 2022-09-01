import { createStyles, Theme } from '@material-ui/core/styles';

const standardLayoutStyles = (theme: Theme) => createStyles({
  '@keyframes rotation': {
    '0%': {
      transform: 'rotate(0)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  root: {
    position: 'fixed',
    background: theme.colors.loaderOverlay,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    transition: 'opacity .7s ease-in-out .5s',
  },
  whiteStroke: {
    display: 'block',
    width: 134,
    height: 134,
    background: theme.colors.loaderBody,
    position: 'absolute',
    zIndex: 1,
  },
  rotatableUnitOverflow: {
    display: 'block',
    width: 134,
    height: 134,
    position: 'absolute',
    zIndex: 2,
    overflow: 'hidden',
    background: theme.colors.loaderBody,
  },
  rotatableUnit: {
    display: 'block',
    width: 130,
    height: 130,
    position: 'absolute',
    borderRadius: '50%',
    animationName: '$rotation',
    animationDuration: '2s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: 110,
      height: 110,
      top: '-55px',
      left: 11,
      borderRadius: '50%',
      background: theme.colors.loaderRotationUnit,
      zIndex: 5,
    },
  },
  loader: {
    zIndex: 3,
  },
  hide: {
    display: 'none',
  },
});

export default standardLayoutStyles;
