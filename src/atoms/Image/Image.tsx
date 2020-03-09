/* eslint-disable react/require-default-props */
import React, { ComponentType } from 'react';
import {
  color, border, borderRadius, borderWidth,
  borderColor, space, height, width,
  opacity, maxWidth, maxHeight, ColorProps, BorderProps, SpaceProps, layout, LayoutProps,
} from 'styled-system';
import styled from '../../styled';

type ImageProps = ColorProps & BorderProps & SpaceProps & LayoutProps & {
  source: {
    uri: string,
  }
};

const Image: ComponentType<ImageProps> = styled.Image`
  ${color}
  ${border}
  ${space}
  ${layout}
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
