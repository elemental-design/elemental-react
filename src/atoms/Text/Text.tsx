import React, {  ComponentType, ReactElement, ReactNode } from 'react';
import { Platform } from 'react-primitives';
import { system, get } from '@styled-system/core';
import {
  color, textStyle, space, style, typography, flexbox,
  TypographyProps, ColorProps, TextStyleProps, SpaceProps, FlexboxProps,
  LineHeightProps, LayoutProps, layout,
} from 'styled-system';

import styled, { css } from '../../styled';

import { parseAttributes } from '../../utils';

export type Props = TypographyProps & ColorProps & TextStyleProps & SpaceProps & FlexboxProps & LineHeightProps & LayoutProps;

const isNumber = (n: number | string) => typeof n === 'number' && !Number.isNaN(n);

const getLineHeight = (n: number, scale: Object) => {
  const val = get(scale, n, n);

  return Platform.OS === 'web' && isNumber(val) ? `${val}px` : val;
};

const lineHeight = system({
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights',
    transform: getLineHeight,
  },
});

const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform',
});

export const mixin = css`
  ${typography}
  ${color}
  ${textStyle}
  ${space}
  ${layout}
  ${textTransform}
  ${lineHeight}
  ${flexbox}
`;

const Text: ComponentType<Props> = styled.Text`${mixin}`;

// const parseLineHeight = (lineHeight: string) => {
//   if (Platform.OS === 'web') {
//     return Number.isNaN(Number(lineHeight)) ? lineHeight : `${lineHeight}px`;
//   }

//   return lineHeight;
// };
type TextProps = Props & {
  bold?: boolean,
  as?: string,
  center?: boolean,
  children?: ReactNode,
};

const TextContainer = ({
  bold, center, as: asElement, ...props
}: TextProps) => {
  const att = parseAttributes(
    bold && {
      fontWeight: 'bold',
      as: Platform.OS === 'web' ? 'strong' : undefined,
    },
    center && {
      textAlign: 'center',
    },
    // eslint-disable-next-line react/destructuring-assignment
    props.fontSize && !props.lineHeight && {
      lineHeight: props.fontSize, // eslint-disable-line react/destructuring-assignment
    },
    // bt && { mt: bt - props.fontSize },
  );

  return (
    <Text
      {...att}
      {...props}
    />
  );
};

TextContainer.defaultProps = {
  fontSize: 16,
  fontFamily: 'primary',
  bold: undefined,
  center: undefined,
};


export default TextContainer;
