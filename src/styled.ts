/* eslint-disable prefer-destructuring */
import styledW, {
  ThemeProvider as ThemeProviderW,
  css as cssW,
  withTheme as withThemeW,
} from 'styled-components';

import styledP, {
  ThemeProvider as ThemeProviderP,
  css as cssP,
  withTheme as withThemeP,
  // @ts-ignore
} from 'styled-components/primitives';

import { Platform } from 'react-primitives';

const isWeb = Platform.OS === 'web';

const styled = isWeb ? styledW : styledP;


const ThemeProvider = isWeb ? ThemeProviderW : ThemeProviderP;
const css = isWeb ? cssW : cssP;
const withTheme = isWeb ? withThemeW : withThemeP;


if (isWeb) {
  styled.View = styled.div;
  styled.Text = styled.p; // Should be styled.span (and create a <Paragraph> text component with as="p")
  styled.Image = styled.img;
}

export { ThemeProvider, css, withTheme, isWeb };

export default styled;
