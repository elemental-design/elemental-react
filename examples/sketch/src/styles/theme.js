/* eslint-disable prefer-destructuring */

const breakpoints = [
  '601px',
  '769px',
  '1025px',
];

// aliases
breakpoints.mobile = breakpoints[0];
breakpoints.tablet = breakpoints[1];
breakpoints.desktop = breakpoints[2];
breakpoints.m = breakpoints[0];
breakpoints.t = breakpoints[1];
breakpoints.d = breakpoints[2];

const colors = {
  black: '#000',
  greys: [
    '#FAFAFA',
    '#F5F5F5',
    '#EEEEEE',
    '#E0E0E0',
    '#BDBDBD',
    '#9E9E9E',
    '#757575',
    '#616161',
    '#424242',
    '#212121',
  ],
  white: '#fff',
  blue: '#2196F3',
  blues: [
    '#E3F2FD',
    '#BBDEFB',
    '#90CAF9',
    '#64B5F6',
    '#42A5F5',
    '#2196F3',
    '#1E88E5',
    '#1976D2',
    '#1565C0',
    '#0D47A1',
  ],
  green: '#43A047',
  greens: [
    '#E8F5E9',
    '#C8E6C9',
    '#A5D6A7',
    '#81C784',
    '#66BB6A',
    '#4CAF50',
    '#43A047',
    '#388E3C',
    '#2E7D32',
    '#1B5E20',
  ],
  navy: '#004175',
  red: '#D32F2F',
  reds: [
    '#FFEBEE',
    '#FFCDD2',
    '#EF9A9A',
    '#E57373',
    '#EF5350',
    '#F44336',
    '#E53935',
    '#D32F2F',
    '#C62828',
    '#B71C1C',
  ],
};

const space = [
  0, 4, 8, 16, 32, 64, 128, 256, 512,
];

const fontSizes = [96, 60, 48, 34, 24, 20, 16, 14];

fontSizes.h1 = fontSizes[0];
fontSizes.h2 = fontSizes[1];
fontSizes.h3 = fontSizes[2];
fontSizes.h4 = fontSizes[3];
fontSizes.h5 = fontSizes[4];
fontSizes.h6 = fontSizes[5];

const textStyles = {
  h1: {
    fontFamily: 'Roboto',
    marginBottom: 16,
  },
  h2: {
    fontFamily: 'Roboto',
    marginBottom: 16,
  },
  h3: {
    fontFamily: 'Roboto',
    marginBottom: 16,
  },
  h4: {
    fontFamily: 'Roboto',
    marginBottom: 16,
  },
  h5: {
    fontFamily: 'Roboto',
    marginBottom: 16,
  },
  h6: {
    fontFamily: 'Roboto',
    marginBottom: 16,
  },
  button: {
    fontFamily: 'Roboto',
  },
};

const fonts = {
  primary: 'Roboto',
  secondary: 'Open Sans',
};

const lineHeights = {
  ...fontSizes,
};

export default {
  fonts,
  space,
  colors,
  fontSizes,
  textStyles,
  breakpoints,
  lineHeights,
};
