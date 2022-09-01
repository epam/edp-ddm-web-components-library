import { muiTheme } from 'storybook-addon-material-ui';
import { whiteTheme, darkTheme } from '../src/styles/themes';
import {
  eUkraineHeadFont,
  eUkraineRegularFont,
  eUkraineLightFont,
} from '../src/styles/fonts';

const darkThemeParameters = {
  themeName: 'Dark Theme',
  typography: {
    fontFamily: 'e-Ukraine-Regular',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480, // Phone
      md: 992, // Tablet
      lg: 1280, // Laptop
      xl: 1680, // Desktop
    },
  },
  palette: {
    background: {
      default: darkTheme.colors.layoutBackgroundOutside,
    },
    primary: {
      main: darkTheme.colors.uIBase,
    },
    text: {
      primary: darkTheme.colors.textMainPrimary,
    },
  },
  colors: {
    ...darkTheme.colors,
  },
  spacing: (number) => number * 8,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [eUkraineRegularFont, eUkraineHeadFont, eUkraineLightFont],
      },
    },
    MuiPaper: {
      elevation4: {
        boxShadow: 'none',
      },
    },
  },
};

const whiteThemeParameters = {
  themeName: 'White Theme',
  typography: {
    fontFamily: 'e-Ukraine-Regular',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480, // Phone
      md: 992, // Tablet
      lg: 1280, // Laptop
      xl: 1680, // Desktop
    },
  },
  palette: {
    background: {
      default: whiteTheme.colors.layoutBackgroundOutside,
    },
    primary: {
      main: whiteTheme.colors.uIBase,
    },
    text: {
      primary: whiteTheme.colors.textMainPrimary,
    },
  },
  colors: {
    ...whiteTheme.colors,
  },
  spacing: (number) => number * 8,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [eUkraineRegularFont, eUkraineHeadFont, eUkraineLightFont],
      },
    },
    MuiPaper: {
      elevation4: {
        boxShadow: 'none',
      },
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [muiTheme([whiteThemeParameters, darkThemeParameters])];
