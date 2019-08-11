// @flow
import { type ComponentType } from 'react';
import styledP from 'styled-components/primitives';
import { Platform } from 'react-primitives';
import styled, { css } from 'styled-components';
import {
  color, border, borderRadius, borderWidth, flex, borderLeft, borderRight,
  borderColor, space, display, height, maxHeight, minHeight, width, maxWidth,
  minWidth, opacity, borderTop, borderBottom, flexWrap,
} from 'styled-system';

import {
  borderBottomColor, borderBottomWidth, borderLeftColor, borderLeftWidth,
  borderTopColor, borderTopWidth, borderRightColor, borderRightWidth,
  borderStyle,
} from '../../utils/styles';


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
  borderStyle?: mixed,
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
  maxHeight?: mixed,
  minHeight?: mixed,
  width?: mixed,
  maxWidth?: mixed,
  minWidth?: mixed,
  opacity?: mixed,
  flexWrap?: mixed,
};

const mixin = css`
  ${display}
  ${color}
  ${border}
  ${borderTop}
  ${borderBottom}
  ${borderLeft}
  ${borderRight}
  ${borderRadius}
  ${borderColor}
  ${borderStyle}
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
  ${maxHeight}
  ${minHeight}
  ${width}
  ${maxWidth}
  ${minWidth}
  ${opacity}
  ${flexWrap}
  ${flex}
`;

const Rectangle: ComponentType<RectangleProps> = Platform.OS === 'web' ? styled.div`
  ${mixin}
` : styledP.View`${mixin}`;


// $FlowFixMe
Rectangle.defaultProps = {
  borderColor: 'black',
  borderWidth: 1,
  borderStyle: 'solid',
};


export default Rectangle;
