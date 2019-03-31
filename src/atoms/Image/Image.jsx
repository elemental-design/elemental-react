// @flow
/* eslint-disable react/require-default-props */
import React, { type ComponentType } from 'react';
import styled from 'styled-components/primitives';
import {
  color, border, borderRadius, borderWidth,
  borderColor, space, height, width,
  opacity, maxWidth, maxHeight,
} from 'styled-system';

type ImageProps = {
  color?: mixed,
  border?: mixed,
  borderRadius?: mixed,
  borderColor?: mixed,
  borderWidth?: mixed,
  space?: mixed,
  height?: mixed,
  maxHeight?: mixed,
  width?: mixed,
  maxWidth?: mixed,
  opacity?: mixed,
};

const Image: ComponentType<ImageProps> = styled.Image`
  ${color}
  ${border}
  ${borderRadius}
  ${borderColor}
  ${borderWidth}
  ${space}
  ${height}
  ${maxHeight}
  ${width}
  ${maxWidth}
  ${opacity}
`;

// $FlowFixMe
Image.defaultProps = {
  maxWidth: '100%',
  height: 'auto',
};

const ImageContainer = ({ src, ...props }: ImageProps & { src?: string }) => {
  if (src) {
    return (
      <Image source={{ uri: src }} {...props} />
    );
  }

  return (
    <Image {...props} />
  );
};

ImageContainer.defaultProps = {
  src: undefined,
};

export default ImageContainer;
