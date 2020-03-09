import { ComponentType } from 'react';
import {
  color, border, borderRadius, borderWidth, flex, borderLeft, borderRight,
  flexbox, layout, display, height, maxHeight, minHeight, width, maxWidth,
  space, opacity, borderTop, borderBottom, flexWrap, BorderProps, BorderLeftProps, BorderRightProps, BorderTopProps, BorderBottomProps, BorderRadiusProps, BorderColorProps, BorderStyleProps, BorderWidthProps, LayoutProps, ColorProps, FlexboxProps, SpaceProps,
} from 'styled-system';
import styled, { css } from '../../styled';

import {
  borderBottomColor, borderBottomWidth, borderLeftColor, borderLeftWidth,
  borderTopColor, borderTopWidth, borderRightColor, borderRightWidth,
  borderStyle,
} from '../../utils/styles';


type RectangleProps = BorderProps & LayoutProps & ColorProps & FlexboxProps & SpaceProps;

const mixin = css`
  ${space}
  ${color}
  ${border}
  ${layout}
  ${flexbox}
`;

const Rectangle: ComponentType<RectangleProps> = styled.View`
  ${mixin}
`;


Rectangle.defaultProps = {
  pt: 5,
  borderColor: 'black',
  borderWidth: 1,
  borderStyle: 'solid',
};


export default Rectangle;
