import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { whiteTheme } from 'styles';

const theme = createMuiTheme({
  palette: {} as PaletteOptions,
});

const AllTheProviders: FC = ({ children }) => {
  return (
    <ThemeProvider theme={{
      ...theme,
      colors: whiteTheme.colors,
    }}
    >
      {children}
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
