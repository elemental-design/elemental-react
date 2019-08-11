import styledW from 'styled-components';
import styledP from 'styled-components/primitives';
import { Platform } from 'react-primitives';

const styled = Platform.OS === 'web' ? styledW : styledP;

export default styled;
