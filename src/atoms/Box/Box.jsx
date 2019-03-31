// @flow
import React, { type ElementProps, type ComponentType } from 'react';
import { Platform, Touchable } from 'react-primitives';
import styled from 'styled-components/primitives';
import {
  justifyContent, alignItems, flexDirection, alignSelf, justifySelf, position, zIndex,
} from 'styled-system';

import Rectangle from '../Rectangle';

// const Box = (props: ElementProps<typeof Rectangle>) => <Rectangle {...props} />;
type BoxProps = ElementProps<typeof Rectangle> & {
  justifyContent?: mixed,
  justifySelf?: mixed,
  alignSelf?: mixed,
  alignItems?: mixed,
  flexDirection?: mixed,
  position?: mixed,
  zIndex?: mixed,
};

const Box: ComponentType<BoxProps> = styled(Rectangle)`
  ${justifyContent}
  ${alignItems}
  ${flexDirection}
  ${justifySelf}
  ${alignSelf}
  ${position}
  ${zIndex}
`;

// $FlowFixMe
Box.defaultProps = {
  display: 'flex',
  borderColor: 'none',
  borderWidth: 0,
};

const getSize = size => (size ? { height: size, width: size } : {});

type Props = {
  onClick?: () => void,
  size?: number,
  center?: boolean,
};

const BoxContainer = ({
  onClick, size, center, ...props
}: Props) => {
  const box = (
    <Box
      {...getSize(size)}
      {...(center ? { alignItems: 'center' } : {})}
      {...props}
    />
  );

  if (onClick && Platform !== 'web') {
    return (
      <Touchable onPress={() => onClick()}>
        {box}
      </Touchable>
    );
  }

  return box;
};

BoxContainer.defaultProps = {
  onClick: undefined,
  size: undefined,
};

export default BoxContainer;
