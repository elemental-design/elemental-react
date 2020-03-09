/* eslint-disable no-nested-ternary */
// @flow
import React, { ComponentProps, ComponentType, ReactNode } from 'react';
import { Platform, Touchable } from 'react-primitives';
import {
  justifyContent, alignItems, flexDirection, alignSelf, justifySelf, position, zIndex, SpaceProps, FlexboxProps, PositionProps, FlexDirectionProps,
} from 'styled-system';

import styled from '../../styled';

import Rectangle from '../Rectangle';
import { parseAttributes } from '../../utils';
import { LayoutContext } from '../../LayoutProvider';

type BoxProps = ComponentProps<typeof Rectangle> & PositionProps & {
  onClick?: () => any,
};

const Box: ComponentType<BoxProps> = styled(Rectangle)`
  ${position}
`;

Box.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
  borderColor: 'none',
  borderStyle: 'solid',
  borderWidth: 0,
};

type Styles = { size: number, [key: string]: any };

const getSize = (args: Styles, breakpoint: number) => {
  const { size, ...styles } = args;

  if (size) {
    styles.width = size;
    styles.height = size;
  }

  const res = Object.keys(styles).reduce((acc: { [key: string]: any }, arg) => {
    if (styles[arg]) {
      const value = styles[arg];

      acc[arg] = Array.isArray(value)
        ? breakpoint > (value.length - 1)
          ? value[value.length - 1]
          : value[breakpoint]
        : value;
    }
    return acc;
  }, {});

  return res;
};

type Props = BoxProps & {
  onClick?: () => void,
  size?: number,
  name?: string, // react-sketchapp
  center?: boolean,
  as?: string,
  p?: number,
  children?: ReactNode,
};


const BoxContainer = ({
  p, pl, pr, pt, pb,
  m, ml, mr, mt, mb,
  onClick, size, width, flex,
  height, center, as: asElement,
  value, ...props
}: Props & {
  value: { state: { breakpoint: number } }
}) => {
  const att = parseAttributes(
    Platform.OS === 'web' && asElement && { as: asElement },
  );
  const { breakpoint } = value.state;

  // const p = Array.isArray(rawP) // eslint-disable-line
  //   ? breakpoint > (rawP.length - 1)
  //     ? rawP[rawP.length - 1]
  //     : rawP[breakpoint]
  //   : rawP;

  const box = (
    <Box
      {...getSize({
        size, width, height, p, pl, pr, pt, pb, m, ml, mr, mt, mb, flex,
      }, breakpoint)}
      onClick={onClick}
      // p={p}
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

function withContext<T extends { value: { state: { breakpoint: number } } }>(Component: ComponentType<T>) {
  return (props: Omit<T, "value">) => (
    <LayoutContext.Consumer>
      {value => <Component {...props as T} value={value} />}
    </LayoutContext.Consumer>
  );
};

BoxContainer.defaultProps = {
  onClick: undefined,
  size: undefined,
};

export default withContext(BoxContainer);
