// Code borrowed from https://github.com/primer/react/blob/006cc80bd8fa2f31947e17e0683880e0b8cdc400/src/ThemeProvider.tsx

import { useEffect, useState } from 'react';

declare var window: any;

type ColorScheme = 'dark' | 'light';

function getSystemColorScheme(): ColorScheme {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
}

function useColorScheme() {
  const [systemColorMode, setSystemColorMode] = useState(getSystemColorScheme);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    const media = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

    function handleChange(event: { [_: string]: any }) {
      const isNight = event.matches
      setSystemColorMode(isNight ? 'dark' : 'light');
    }

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (media) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (media.addEventListener !== undefined) {
        media.addEventListener('change', handleChange);
        return function cleanup() {
          media.removeEventListener('change', handleChange);
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      else if (media.addListener !== undefined) {
        media.addListener(handleChange);
        return function cleanup() {
          media.removeListener(handleChange);
        }
      }
    }
  }, []);

  return systemColorMode;
}

export default useColorScheme;
