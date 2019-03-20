// @flow
import React, { type ElementProps, type ComponentType } from 'react';
import { Platform, Touchable } from 'react-primitives';
import styled from 'styled-components/primitives';
import {
  justifyContent, alignItems, flexDirection, alignSelf, justifySelf,
} from 'styled-system';

import Rectangle from '../Rectangle';

// const Box = (props: ElementProps<typeof Rectangle>) => <Rectangle {...props} />;
type BoxProps = ElementProps<typeof Rectangle> & {
  justifyContent?: mixed,
  justifySelf?: mixed,
  alignself?: mixed,
  alignItems?: mixed,
  flexDirection?: mixed,
};

const Box: ComponentType<BoxProps> = styled(Rectangle)`
  ${justifyContent}
  ${alignItems}
  ${flexDirection}
  ${justifySelf}
  ${alignSelf}
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
};

const BoxContainer = ({ onClick, size, ...props }: Props) => {
  const box = (
    <Box
      {...getSize(size)}
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
