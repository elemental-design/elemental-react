// @flow
import React, { type ComponentType } from 'react';
import styled, { css } from 'styled-components/primitives';
import {
  fontSize, fontFamily, textColor, textAlign, lineHeight,
  textStyle, fontWeight, fontStyle, space, letterSpacing,
  alignSelf, justifySelf, flex, opacity,
} from 'styled-system';

import { parseAttributes } from '../../utils';

export type Props = {|
  fontSize?: mixed,
  fontFamily?: mixed,
  textColor?: mixed,
  textAlign?: mixed,
  textStyle?: mixed,
  fontWeight?: mixed,
  fontSize?: mixed,
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

const Text: ComponentType<Props> = styled.Text`
  ${mixin}
`;

const TextContainer = ({ bold, center, ...props }: {
  ...Props,
  bold?: boolean,
  center?: boolean,
}) => {
  const att = parseAttributes(
    bold && { fontWeight: 'bold' },
    center && { textAlign: 'center' }, // eslint-disable-next-line react/destructuring-assignment
    props.fontSize && !props.lineHeight && { lineHeight: props.fontSize },
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
