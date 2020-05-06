/* eslint-disable react/require-default-props */
import React, { ComponentType } from 'react';
import {
  compose, color, border, layout,
  space, position, flexbox,
  ColorProps, BorderProps, SpaceProps, LayoutProps,
} from 'styled-system';
import styled from '../../styled';
import { mixin } from '../Rectangle/Rectangle';
import { parseAttributes } from '../../utils';
import { Platform } from 'react-primitives';
import { makeShadow } from '../../utils/shadow';

type ImageProps = ColorProps & BorderProps & SpaceProps & LayoutProps & {
  source: {
    uri: string,
  },
  src?: string,
  boxShadow?: (_: {}) => string | string,
  as?: string,
};

const Image: ComponentType<ImageProps> = styled.Image`
  ${mixin}
`;

// $FlowFixMe
Image.defaultProps = {
  maxWidth: '100%',
  height: 'auto',
};

const ImageContainer = ({ as: asElement, boxShadow, src, source, ...props }: ImageProps) => {
  const att = parseAttributes(
    Platform.OS === 'web' && asElement && { as: asElement },
    // FIXME: Figure out why shadows prop doesn't work in react-sketchapp
    // boxShadow && Platform.OS !== 'sketch' ? (makeShadow(boxShadow) as any) : { shadows: makeShadow(boxShadow, null, true) },
    boxShadow && (makeShadow(boxShadow) as any),
    Platform.OS === 'web' && { src },
  );

  return (
    <Image source={src ? { uri: src } : source} {...props} {...att} />
  );
};

ImageContainer.defaultProps = {
  src: undefined,
};

export default ImageContainer;
