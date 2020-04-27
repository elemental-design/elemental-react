/* eslint-disable no-nested-ternary */
// @flow
import React, { ComponentProps, ComponentType, ReactNode } from 'react';
import { Platform, Touchable } from 'react-primitives';

import styled from '../../styled';

import Rectangle from '../Rectangle';
import { parseAttributes } from '../../utils';
import { makeShadow } from '../../utils/shadow';
import { withContext } from '../../LayoutProvider';
// import useHover from '../../hooks/use-hover';

type BoxProps = ComponentProps<typeof Rectangle> & {
  onClick?: () => any,
};

const Box: ComponentType<BoxProps> = styled(Rectangle)``;

Box.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
  ...(Platform.OS !== 'figma' && { borderColor: 'none' }), // FIXME: ...
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

type InteractiveState = 'idle' | 'hover' | 'focus';
type StyleKey = 'hover' | 'focus' | 'disabled';

type Props = BoxProps & {
  styles?: { [K in StyleKey]?: Object }
  pseudoState: InteractiveState,
  disabled?: boolean,
  onClick?: () => void,
  size?: number,
  name?: string, // react-sketchapp
  center?: boolean,
  as?: string,
  p?: number,
  boxShadow?: (_: {}) => string | string,
  children?: ReactNode,
};




const BoxContainer = ({
  p, pl, pr, pt, pb,
  m, ml, mr, mt, mb, boxShadow,
  onClick, size, width, flex, styles,
  height, center, as: asElement, disabled,
  value, ...props
}: Props & {
  value: { state: { breakpoint: number } }
}) => {
  const att = parseAttributes<any>(
    Platform.OS === 'web' && asElement && { as: asElement },
    boxShadow && Platform.OS !== 'sketch' ? makeShadow(boxShadow) : { shadows: makeShadow(boxShadow, null, true)},
  );
  const { breakpoint = 0 } = value && value.state || {};


  const box = (
    <Box
      {...getSize({
        size, width, height, p, pl, pr, pt, pb, m, ml, mr, mt, mb, flex,
      }, breakpoint)}
      onClick={onClick}
      {...(center ? { alignItems: 'center' } : {})}
      {...props}
      {...att}
    />
  );

  if (onClick && Platform.OS !== 'web' && Platform.OS !== 'figma') {
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
  name: 'Box',
};

export default withContext(BoxContainer);
