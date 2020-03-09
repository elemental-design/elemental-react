// @flow
import React, { type ComponentType } from 'react';
import { Platform } from 'react-primitives';
import {
  fontSize, fontFamily, textColor, textAlign, lineHeight as styledLineHeight,
  textStyle, fontWeight, fontStyle, space, letterSpacing,
  alignSelf, justifySelf, flex, opacity, style,
} from 'styled-system';
import styled, { css } from '../../styled';

import { parseAttributes } from '../../utils';

export type Props = {|
  fontSize?: string,
  fontFamily?: mixed,
  textColor?: mixed,
  textAlign?: mixed,
  textStyle?: string,
  fontWeight?: mixed,
  fontStyle?: mixed,
  space?: mixed,
  textTransform?: mixed,
  letterSpacing?: mixed,
  lineHeight?: mixed,
  alignSelf?: mixed,
  justifySelf?: mixed,
  flex?: mixed,
  opacity?: mixed,
|};

const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform',
});

export const mixin = css`
  ${fontSize}
  ${fontFamily}
  ${textColor}
  ${textAlign}
  ${textStyle}
  ${fontWeight}
  ${fontSize}
  ${fontStyle}
  ${space}
  ${letterSpacing}
  ${textTransform}
  ${styledLineHeight}
  ${alignSelf}
  ${justifySelf}
  ${flex}
  ${opacity}
`;

const Text: ComponentType<Props> = styled.Text`${mixin}`;

const parseLineHeight = (lineHeight: string) => {
  if (Platform.OS === 'web') {
    return Number.isNaN(Number(lineHeight)) ? lineHeight : `${lineHeight}px`;
  }

  return lineHeight;
};

const TextContainer = ({
  bold, center, as: asElement, lineHeight, bt, ...props
}: {
  ...Props,
  bold?: boolean,
  as?: string,
  center?: boolean,
}) => {
  const att = parseAttributes(
    bold && {
      fontWeight: 'bold',
      as: Platform.OS === 'web' ? 'strong' : undefined,
    },
    center && {
      textAlign: 'center',
    },
    lineHeight && {
      lineHeight: parseLineHeight(lineHeight),
    }, // eslint-disable-next-line react/destructuring-assignment
    props.fontSize && !lineHeight && { // eslint-disable-next-line react/destructuring-assignment
      lineHeight: parseLineHeight(props.fontSize),
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
  fontSize: 16, // eslint-disable-line react/default-props-match-prop-types
  fontFamily: 'primary',
  bold: undefined,
  center: undefined,
};

export default TextContainer;
