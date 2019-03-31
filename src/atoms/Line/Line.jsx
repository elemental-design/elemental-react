// @flow
import { type ComponentType, type ElementProps } from 'react';
import styled from 'styled-components/primitives';
import { opacity } from 'styled-system';

import Rectangle from '../Rectangle';

type Props = ElementProps<typeof Rectangle> & {
  opacity?: number,
};

const Line: ComponentType<Props> = styled(Rectangle)`
  ${opacity}
`;

// $FlowFixMe
Line.defaultProps = {
  width: 64,
  height: 1,
  bg: 'black',
  borderWidth: 0,
};

export default Line;
