// @flow
import React from 'react';
import { ThemeProvider } from 'styled-components/primitives';

const baseTheme = {
  fonts: {},
  space: [
    0, 4, 8, 16, 32, 64, 128, 256, 512,
  ],
  colors: {
    black: '#000000',
    white: '#ffffff',
  },
  fontSizes: [96, 60, 48, 34, 24, 20, 16, 14],
  textStyles: {},
  breakpoints: [
    '601px',
    '769px',
    '1025px',
  ],
  lineHeights: {},
};

const ComponentLibThemeProvider = ({ theme = baseTheme, ...props }: {
  theme: typeof baseTheme,
}) => (
  <ThemeProvider theme={theme} {...props} />
);

export default ComponentLibThemeProvider;
