// @flow
import React, { type ComponentType } from 'react';
import { Platform } from 'react-primitives';
import styled, { css } from 'styled-components';
import styledP from 'styled-components/primitives';
import {
  fontSize, fontFamily, textColor, textAlign, lineHeight,
  textStyle, fontWeight, fontStyle, space, letterSpacing,
  alignSelf, justifySelf, flex, opacity,
} from 'styled-system';

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
  letterSpacing?: mixed,
  lineHeight?: mixed,
  alignSelf?: mixed,
  justifySelf?: mixed,
  flex?: mixed,
  opacity?: mixed,
|};

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
  ${lineHeight}
  ${alignSelf}
  ${justifySelf}
  ${flex}
  ${opacity}
`;

const Text: ComponentType<Props> = Platform.OS === 'web' ? styled.p`
  ${mixin}
` : styledP.Text`${mixin}`;

const TextContainer = ({
  bold, center, as: asElement, lineHeight: lineHeightCopy, ...props
}: {
  ...Props,
  bold?: boolean,
  as?: string,
  center?: boolean,
}) => {
  const att = parseAttributes(
    bold && { fontWeight: 'bold' },
    center && { textAlign: 'center' }, // eslint-disable-next-line react/destructuring-assignment
    props.fontSize && !lineHeightCopy && { lineHeight: Platform.OS === 'web' ? `${props.fontSize}px` : props.fontSize },
    Platform.OS === 'web' && asElement && { as: asElement },
    Platform.OS === 'web' && typeof lineHeightCopy === 'string' && !lineHeightCopy.includes('px') && { lineHeight: `${lineHeightCopy}px` },
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
  fontFamily: 'secondary',
  bold: undefined,
  center: undefined,
};

export default TextContainer;
