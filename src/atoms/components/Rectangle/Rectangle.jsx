// @flow
import { type ComponentType } from 'react';
import styled from 'styled-components/primitives';
import {
  color, border, borderRadius, borderWidth, flex, borderLeft, borderRight,
  borderColor, space, display, height, width, opacity, borderTop, borderBottom,
} from 'styled-system';

import {
  borderBottomColor, borderBottomWidth, borderLeftColor, borderLeftWidth,
  borderTopColor, borderTopWidth, borderRightColor, borderRightWidth,
} from '../../../utils/styles';


type RectangleProps = {
  display?: string,
  color?: string,
  border?: mixed,
  borderLeft?: mixed,
  borderRight?: mixed,
  borderTop?: mixed,
  borderBottom?: mixed,
  borderRadius?: mixed,
  borderColor?: mixed,
  borderWidth?: mixed,
  borderBottomWidth?: mixed,
  borderBottomColor?: mixed,
  borderTopWidth?: mixed,
  borderTopColor?: mixed,
  borderLeftWidth?: mixed,
  borderLeftColor?: mixed,
  borderRightWidth?: mixed,
  borderRightColor?: mixed,
  space?: mixed,
  height?: mixed,
  width?: mixed,
  opacity?: mixed,
};

const Rectangle: ComponentType<RectangleProps> = styled.View`
  ${display}
  ${color}
  ${border}
  ${borderTop}
  ${borderBottom}
  ${borderLeft}
  ${borderRight}
  ${borderRadius}
  ${borderColor}
  ${borderWidth}
  ${borderBottomWidth}
  ${borderBottomColor}
  ${borderTopWidth}
  ${borderTopColor}
  ${borderLeftWidth}
  ${borderLeftColor}
  ${borderRightWidth}
  ${borderRightColor}
  ${space}
  ${height}
  ${width}
  ${opacity}
  ${flex}
`;

// $FlowFixMe
Rectangle.defaultProps = {
  borderColor: 'black',
  borderWidth: 1,
};


export default Rectangle;
