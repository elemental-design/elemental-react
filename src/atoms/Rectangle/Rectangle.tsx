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
