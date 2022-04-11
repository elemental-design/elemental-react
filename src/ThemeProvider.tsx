// Color scheme theming code used from https://github.com/primer/react/blob/006cc80bd8fa2f31947e17e0683880e0b8cdc400/src/ThemeProvider.tsx (MIT License)

import React, { ReactNode, createContext, useContext, ComponentType, Dispatch, SetStateAction } from 'react';
import deepmerge from 'deepmerge';

// @ts-ignore
import useColorScheme from './hooks/use-color-scheme';
// import { Platform } from 'react-primitives';
import { ThemeProvider } from './styled';
import { LayoutProvider } from './LayoutProvider';
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
  colorSchemes: {},
};

const defaultColorMode = 'day';
const defaultDayScheme = 'light';
const defaultNightScheme = 'dark';

type Theme = {[key: string]: any};
export type ColorMode = 'day' | 'night';
type ColorModeWithAuto = ColorMode | 'auto';

const ThemeContext = React.createContext<{
  theme?: Theme
  colorScheme?: string
  colorMode?: ColorModeWithAuto
  resolvedColorMode?: ColorMode
  resolvedColorScheme?: string
  dayScheme?: string
  nightScheme?: string
  setColorMode: Dispatch<SetStateAction<ColorModeWithAuto>>,
  setDayScheme: Dispatch<SetStateAction<string>>
  setNightScheme: Dispatch<SetStateAction<string>>
}>({
  setColorMode: () => null,
  setDayScheme: () => null,
  setNightScheme: () => null
});

function resolveColorMode(colorMode: ColorModeWithAuto, systemColorMode: ColorMode) {
  switch (colorMode) {
    case 'auto':
      return systemColorMode
    default:
      return colorMode
  }
}

function chooseColorScheme(colorMode: ColorMode, dayScheme: string, nightScheme: string) {
  switch (colorMode) {
    case 'day':
      return dayScheme
    case 'night':
      return nightScheme
  }
}


export const useTheme = () => {
  return React.useContext(ThemeContext);
}

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
          <Component // @ts-ignore
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

const useSystemColorMode = () => {
  const systemColorScheme = useColorScheme();

  if (systemColorScheme === 'light') {
    return 'day';
  }
  if (systemColorScheme === 'dark') {
    return 'night';
  }

  return defaultColorMode;
}

function applyColorScheme(
  theme: Theme,
  colorScheme: string
): {resolvedTheme: Theme; resolvedColorScheme: string | undefined} {
  if (!theme.colorSchemes) {
    return {
      resolvedTheme: theme,
      resolvedColorScheme: undefined
    }
  }

  if (!theme.colorSchemes[colorScheme]) {
    // eslint-disable-next-line no-console
    console.error(`\`${colorScheme}\` scheme not defined in \`theme.colorSchemes\``)

    // Apply the first defined color scheme
    const defaultColorScheme = Object.keys(theme.colorSchemes)[0]
    return {
      resolvedTheme: deepmerge(theme, theme.colorSchemes[defaultColorScheme]),
      resolvedColorScheme: defaultColorScheme
    }
  }

  return {
    resolvedTheme: deepmerge(theme, theme.colorSchemes[colorScheme]),
    resolvedColorScheme: colorScheme
  }
}

const ComponentLibThemeProvider = ({
  design = {}, breakpoint = 0, children, ...props
}: {
  design: { [key: string]: any },
  theme: typeof baseTheme,
  colorMode?: ColorMode,
  dayScheme?: string,
  nightScheme?: string,
  breakpoint?: number,
  children: ReactNode,
}) => {
  const {
    theme: fallbackTheme,
    colorMode: fallbackColorMode,
    dayScheme: fallbackDayScheme,
    nightScheme: fallbackNightScheme
  } = useTheme();

  const theme = props.theme || fallbackTheme || baseTheme;

  const [colorMode, setColorMode] = React.useState(props.colorMode || fallbackColorMode || defaultColorMode)
  const [dayScheme, setDayScheme] = React.useState(props.dayScheme || fallbackDayScheme || defaultDayScheme)
  const [nightScheme, setNightScheme] = React.useState(props.nightScheme || fallbackNightScheme || defaultNightScheme)
  const systemColorMode = useSystemColorMode()
  const resolvedColorMode = resolveColorMode(colorMode, systemColorMode)
  const colorScheme = chooseColorScheme(resolvedColorMode, dayScheme, nightScheme)
  const { resolvedTheme, resolvedColorScheme } = React.useMemo(
    () => applyColorScheme(theme, colorScheme),
    [theme, colorScheme]
  );

  // Update state if props change
  React.useEffect(() => {
    setColorMode(props.colorMode || fallbackColorMode || defaultColorMode);
  }, [props.colorMode, fallbackColorMode]);

  React.useEffect(() => {
    setDayScheme(props.dayScheme || fallbackDayScheme || defaultDayScheme);
  }, [props.dayScheme, fallbackDayScheme]);

  React.useEffect(() => {
    setNightScheme(props.nightScheme || fallbackNightScheme || defaultNightScheme);
  }, [props.nightScheme, fallbackNightScheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: resolvedTheme,
        colorScheme,
        colorMode,
        resolvedColorMode,
        resolvedColorScheme,
        dayScheme,
        nightScheme,
        setColorMode,
        setDayScheme,
        setNightScheme
      }}
    >
      <ThemeProvider theme={resolvedTheme}>
        <DesignProvider design={design}>
          <LayoutProvider breakpoint={breakpoint}>
            {children}
          </LayoutProvider>
        </DesignProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ComponentLibThemeProvider;
