import { ComponentType } from 'react';
import { Platform } from 'react-primitives';
import {
  compose, color, border, flexbox, layout, space,
  BorderProps, LayoutProps, ColorProps, FlexboxProps, SpaceProps, PositionProps, boxShadow, position,
} from 'styled-system';
import styled, { css } from '../../styled';

import {
  transform,
  shadowColor,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  shadowSpread,
  shadowInner,
  elevation,
  cursor,
} from '../../utils/styles';


type RectangleProps = BorderProps & LayoutProps & ColorProps & FlexboxProps & SpaceProps & PositionProps;


export const mixin = css`
  /* Sketch transforms seem a bit buggy with styled-components/primitives css-to-react-native */
  ${Platform.OS !== 'sketch' ? transform : ''}
  ${compose(space, color, border, layout, flexbox, position)}
  ${Platform.select({
    sketch: compose(shadowColor, shadowOffset, shadowOpacity, shadowRadius, shadowSpread, shadowInner),
    figma: compose(shadowColor, shadowOffset, shadowOpacity, shadowRadius),
    ios: compose(shadowColor, shadowOffset, shadowOpacity, shadowRadius),
    android: compose(elevation),
    web: compose(boxShadow, cursor),
  })}
`;

const borderPropNames = [
  'border', 'borderWidth', 'borderStyle', 'borderColor', 'borderRadius', 'borderTop', 'borderTopWidth', 'borderTopStyle', 'borderTopColor', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderRight', 'borderRightWidth', 'borderRightStyle', 'borderRightColor', 'borderBottom', 'borderBottomWidth', 'borderBottomStyle', 'borderBottomColor', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'borderLeft', 'borderLeftWidth', 'borderLeftStyle', 'borderLeftColor', 'borderX', 'borderY',
];
const layoutPropNames = [
  'width', 'height', 'display', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'size', 'verticalAlign', 'overflow', 'overflowX', 'overflowY', 'position',
];
const colorPropNames = [
  'color', 'bg', 'backgroundColor',
];
const flexPropNames = [
  'alignItems', 'alignContent', 'justifyItems', 'justifyContent', 'flexWrap', 'flexDirection', 'flex', 'flexGrow', 'flexShrink', 'flexBasis', 'justifySelf', 'alignSelf', 'order',
];
const spacePropNames = [
  'm', 'margin', 'marginTop', 'mt', 'marginRight', 'mr', 'marginBottom', 'mb', 'marginLeft', 'ml', 'marginX', 'mx', 'marginY', 'my', 'padding', 'p', 'paddingTop', 'pt', 'paddingRight', 'pr', 'paddingBottom', 'pb', 'paddingLeft', 'pl', 'paddingX', 'px', 'paddingY', 'py',
];
const extraPropNames = [
  'transform', 'shadowColor', 'shadowOffset', 'shadowOpacity', 'shadowRadius', 'shadowSpread', 'shadowInner', 'elevation', 'shadows', 'name', 'cursor', 'pseudoState'
];

export const rectangleStylePropNames = [...borderPropNames, ...layoutPropNames, ...colorPropNames, ...flexPropNames, ...spacePropNames, ...extraPropNames];

const Rectangle: ComponentType<RectangleProps> = styled.View.withConfig({
  shouldForwardProp: (propName: keyof RectangleProps) => !rectangleStylePropNames.includes(propName),
})`
  ${mixin}
`;
  /* ${(props) => {
    if (!isWeb) {
      return '';
    }
    return ['hover', 'focus'].map(selector => {
      if (props[selector]) {
        return `
        &:${selector} {
          ${mixin}
        }\n`;
      }
    }).join('\n');
  }} */


Rectangle.defaultProps = {
  borderColor: 'black',
  borderWidth: 1,
  borderStyle: 'solid',
};


export default Rectangle;
