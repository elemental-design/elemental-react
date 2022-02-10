/* eslint-disable no-nested-ternary */
// @flow
import React, { ComponentProps, ComponentType, ReactNode } from 'react';
import { Platform, Touchable } from 'react-primitives';

const RN: any = Platform.select({
  ios: () => require('react-native'),
  android: () => require('react-native'),
  default: () => { return {}; },
})();

const { TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } = RN;

import styled from '../../styled';

import Rectangle from '../Rectangle';
import { parseAttributes } from '../../utils';
import { makeShadow } from '../../utils/shadow';
import { withContext } from '../../LayoutProvider';
// import useHover from '../../hooks/use-hover';

type BoxProps = ComponentProps<typeof Rectangle> & {
  onClick?: () => any,
  onPress?: () => any,
  ref?: () => any,
  as?: string | ReactNode,
};

const Box: ComponentType<BoxProps> = styled(Rectangle)``;

Box.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
  ...((Platform.OS === 'web' || Platform.OS === 'sketch') && { borderColor: 'none' }), // FIXME: ...
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
  pseudoState?: InteractiveState,
  disabled?: boolean,
  onClick?: () => void,
  onPress?: () => void,
  touchable?: 'opacity' | 'highlight' | 'default' | 'material' | 'native',
  size?: number,
  name?: string, // react-sketchapp
  center?: boolean,
  p?: number,
  boxShadow?: (_: {}) => string | string,
  children?: ReactNode,
  forwardedRef?: () => any,
};




const BoxContainer = ({
  p, pl, pr, pt, pb, forwardedRef,
  m, ml, mr, mt, mb, boxShadow, touchable = 'default',
  onPress, size, width, flex, styles,
  height, center, as: asElement, disabled,
  value, ...props
}: Props & {
  value: { state: { breakpoint: number } }
}) => {
  const onClick = onPress || props.onClick;
  const att = parseAttributes<any>(
    Platform.OS === 'web' && asElement && { as: asElement },
    boxShadow && Platform.OS !== 'sketch' ? makeShadow(boxShadow) : { shadows: makeShadow(boxShadow, null, true)},
  );
  const { breakpoint = 0 } = value && value.state || {};


  let TouchableView;
  let TouchableComp = Touchable;
  
  if (typeof onClick === 'function') {
    if (['ios', 'android'].includes(Platform.OS)) {
      switch (touchable) {
        case 'opacity': {
          TouchableView = TouchableOpacity;
          break;
        }
        case 'highlight': {
          TouchableView = TouchableHighlight;
          break;
        }
        case 'native':
        case 'material': {
          if (Platform.OS === 'android') {
            TouchableComp = TouchableNativeFeedback;
          }
        }
      }
    }
  }

  const box = (
    <Box
      as={typeof onClick === 'function' && TouchableView}
      ref={forwardedRef}
      {...getSize({
        size, width, height, p, pl, pr, pt, pb, m, ml, mr, mt, mb, flex,
      }, breakpoint)}
      onClick={Platform.OS === 'web' ? onClick : undefined}
      onPress={['ios', 'android'].includes(Platform.OS) ? onClick : undefined}
      {...(center ? { alignItems: 'center' } : {})}
      {...props}
      {...att}
    />
  );

  if (typeof onClick === 'function' && !TouchableView && Platform.OS !== 'web' && Platform.OS !== 'figma') {
    return (
      <TouchableComp onPress={() => onClick()}>
        {box}
      </TouchableComp>
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
