// @flow
import React, { ReactNode, createContext, useContext, ComponentType } from 'react';
// import { Platform } from 'react-primitives';
import { ThemeProvider } from './styled';
// import { ThemeProvider as ThemeProviderPrimitives } from 'styled-components/primitives';

// const ThemeProvider = Platform.OS === 'web' ? ThemeProviderWeb : ThemeProviderPrimitives;

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

const DesignContext = createContext<{
  state: any,
  dispatch?: any,
}>({
  state: {}
});

export const useDesign = (name: string) => {
  const { state } = useContext(DesignContext);
  const { design } = state || {};

  return design[name] || {};
};

interface WithStylesProps { [key: string]: any };

export function withStyles<T>(Component: ComponentType<T>, styles: any): ComponentType<T> {
  return (props: T) => (
    <Component {...styles} {...props} />
  );
};

export function withDesign<T>(Component: ComponentType<T>): ComponentType<T> {
  return (props: T) => (
    <DesignContext.Consumer>
      {(value) => {
        const { state } = value;
        const { design = {} } = state || {};
        return (
          <Component
            {...(design[Component.displayName] ? design[Component.displayName] : {})}
            {...props}
          />
        );
      }}
    </DesignContext.Consumer>
  );
};

const DesignProvider = ({ design, children }: {
  design: { [key: string]: any },
  children: ReactNode,
}) => {
  const state = { design };
  const dispatch = () => {};
  const value = { state, dispatch };

  return (
    <DesignContext.Provider value={value}>
      {children}
    </DesignContext.Provider>
  );
};

const ComponentLibThemeProvider = ({
  design = {}, theme = baseTheme, children, ...props
}: {
  design: { [key: string]: any },
  theme: typeof baseTheme,
  children: ReactNode,
}) => (
  <ThemeProvider theme={theme} {...props}>
    <DesignProvider design={design}>
      {children}
    </DesignProvider>
  </ThemeProvider>
);

export default ComponentLibThemeProvider;
