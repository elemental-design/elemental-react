// @flow
import React, { type ElementProps, type ComponentType } from 'react';
import { Platform, Touchable } from 'react-primitives';
import {
  justifyContent, alignItems, flexDirection, alignSelf, justifySelf, position, zIndex,
} from 'styled-system';

import styled from '../../styled';

import Rectangle from '../Rectangle';
import { parseAttributes } from '../../utils';
import { LayoutContext } from '../../LayoutProvider';

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
  flexDirection: 'column',
  borderColor: 'none',
  borderStyle: 'solid',
  borderWidth: 0,
};

const getSize = size => (size ? { height: size, width: size } : {});

type Props = {
  onClick?: () => void,
  size?: number,
  center?: boolean,
  as?: string,
  p?: number,
  value: { state: { breakpoint: number }},
};

const BoxContainer = ({
  p: rawP, onClick, size, center, as: asElement, value, ...props
}: Props) => {
  const att = parseAttributes(
    Platform.OS === 'web' && asElement && { as: asElement },
  );
  const { breakpoint } = value.state;

  const p = Array.isArray(rawP) // eslint-disable-line
    ? breakpoint > (rawP.length - 1)
      ? rawP[rawP.length - 1]
      : rawP[breakpoint]
    : rawP;

  const box = (
    <Box
      {...getSize(size)}
      onClick={onClick}
      p={p}
      {...(center ? { alignItems: 'center' } : {})}
      {...att}
      {...props}
    />
  );

  if (onClick && Platform.OS !== 'web') {
    return (
      <Touchable onPress={() => onClick()}>
        {box}
      </Touchable>
    );
  }

  return box;
};

const withContext = Component => (props: Props) => (
  <LayoutContext.Consumer>
    {value => <Component {...props} value={value} />}
  </LayoutContext.Consumer>
);

BoxContainer.defaultProps = {
  onClick: undefined,
  size: undefined,
};

export default withContext(BoxContainer);
