import { ComponentType } from 'react';
import { Platform } from 'react-primitives';
import {
  compose, color, border, flexbox, layout, space,
  BorderProps, LayoutProps, ColorProps, FlexboxProps, SpaceProps, PositionProps, boxShadow, position,
} from 'styled-system';
import styled, { css } from '../../styled';

import {
  shadowColor,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  shadowSpread,
  shadowInner,
  elevation,
} from '../../utils/styles';


type RectangleProps = BorderProps & LayoutProps & ColorProps & FlexboxProps & SpaceProps & PositionProps;


export const mixin = css`
  ${compose(space, color, border, layout, flexbox, position)}
  ${Platform.select({
    sketch: compose(shadowColor, shadowOffset, shadowOpacity, shadowRadius, shadowSpread, shadowInner),
    figma: compose(shadowColor, shadowOffset, shadowOpacity, shadowRadius),
    ios: compose(shadowColor, shadowOffset, shadowOpacity, shadowRadius),
    android: compose(elevation),
    web: boxShadow,
  })}
`;

const borderPropNames = [
  'border', 'borderWidth', 'borderStyle', 'borderColor', 'borderRadius', 'borderTop', 'borderTopWidth', 'borderTopStyle', 'borderTopColor', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderRight', 'borderRightWidth', 'borderRightStyle', 'borderRightColor', 'borderBottom', 'borderBottomWidth', 'borderBottomStyle', 'borderBottomColor', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'borderLeft', 'borderLeftWidth', 'borderLeftStyle', 'borderLeftColor', 'borderX', 'borderY',
];
const layoutPropNames = [
  'width', 'height', 'display', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'size', 'verticalAlign', 'overflow', 'overflowX', 'overflowY',
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

const filterOutProps = [...borderPropNames, ...layoutPropNames, ...colorPropNames, ...flexPropNames, ...spacePropNames];

const Rectangle: ComponentType<RectangleProps> = styled.View.withConfig({
  shouldForwardProp: (propName: keyof RectangleProps) => !filterOutProps.includes(propName),
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
