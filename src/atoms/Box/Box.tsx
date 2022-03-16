/* eslint-disable no-nested-ternary */
// @flow
import React, { ComponentProps, ComponentType, ReactNode, useState } from 'react';
import { Platform, Touchable } from 'react-primitives';

const RN: any = Platform.select({
  ios: () => require('react-native'),
  android: () => require('react-native'),
  default: () => { return {}; },
})();

const { TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } = RN;

import styled from '../../styled';

import Rectangle, { rectangleStylePropNames } from '../Rectangle';
import { parseAttributes } from '../../utils';
import { makeShadow } from '../../utils/shadow';
import { withContext } from '../../LayoutProvider';
// import useHover from '../../hooks/use-hover';

type BoxProps = ComponentProps<typeof Rectangle> & {
  onClick?: (...args: any[]) => any,
  onPress?: (...args: any[]) => any,
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

export type InteractiveState = 'idle' | 'hover' | 'focus' | undefined;
type StyleKey = 'hover' | 'focus' | 'disabled';

type Props = BoxProps & {
  styles?: { [K in StyleKey]?: Object }
  pseudoState?: InteractiveState,
  disabled?: boolean,
  onClick?: (...args: any[]) => void,
  onPress?: (...args: any[]) => void,
  onMouseEnter: Function,
  onMouseLeave: Function,
  touchable?: 'opacity' | 'highlight' | 'default' | 'material' | 'native',
  size?: number,
  name?: string, // react-sketchapp
  center?: boolean,
  p?: number,
  boxShadow?: (_: {}) => string | string,
  children?: ReactNode,
  forwardedRef?: () => any,
};

const useMouseEventState = (initialPseudoState: InteractiveState) => {
  const [hover, setHover] = useState(false);
  const [pseudoState, setPseudoState]: [InteractiveState, Function] = useState('idle');

  if (Platform.OS === 'sketch') {
    return { events: {}, pseudoState: initialPseudoState || 'idle' };
  }

  const onPress = () => {
    setPseudoState('focus');

    setTimeout(() => {
      setPseudoState(initialPseudoState || 'idle');
    }, 200);
  }

  const onMouseEnter = () => {
    setHover(true);
    setPseudoState('hover');
  };
  const onMouseLeave = () => {
    if (hover) {
      setHover(false);
      setPseudoState(initialPseudoState || 'idle');
    }
  };
  return {
    events: { onMouseEnter, onMouseLeave, onPress },
    pseudoState: initialPseudoState || pseudoState,
  }
}

// FIXME: Move pseudoStyles into a hook and context that can be accessed by parent components like <Button>
// To allow for things like custom disabled or hover button text


const BoxContainer = ({
  p, pl, pr, pt, pb, px, py, forwardedRef,
  m, ml, mr, mt, mb, mx, my, boxShadow, touchable = 'default',
  onPress, size, width, flex, styles,
  height, center, as: asElement, disabled,
  value, ...props
}: Props & {
  value: { state: { breakpoint: number } }
}) => {
  const { events: mouseEvents, pseudoState } = useMouseEventState(props.pseudoState);
  const onClick = onPress || props.onClick;
  const pseudoStyles = { ...styles };
  const att = parseAttributes<any>(
    Platform.OS === 'web' && asElement && { as: asElement },
    pseudoState && pseudoState !== 'idle' && { ...pseudoStyles[pseudoState] },
    boxShadow && Platform.OS !== 'sketch' ? makeShadow(boxShadow) : { shadows: makeShadow(boxShadow as any, null, true)},
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

  const onPressHandler = (event: any) => {
    if (typeof onClick === 'function') {
      onClick(event);
    }
    if (typeof mouseEvents?.onPress === 'function') {
      mouseEvents.onPress();
    }
  }

  const box = (
    <Box
      as={typeof onClick === 'function' && TouchableView}
      ref={forwardedRef}
      {...getSize({ // @ts-ignore
        size, width, height, p, pl, pr, pt, pb, px, py, m, ml, mr, mt, mb, mx, my, flex,
      }, breakpoint)}
      // @ts-ignore
      onMouseEnter={mouseEvents.onMouseEnter}
      // @ts-ignore
      onMouseLeave={mouseEvents.onMouseLeave}
      {...(center ? { alignItems: 'center' } : {})}
      {...props}
      {...att}
      // inject mouse event click handler for pseudoState
      {...(['ios', 'android'].includes(Platform.OS) && { onPress: onPressHandler })}
      {...('web' === Platform.OS && { onClick: onPressHandler })}
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

export { rectangleStylePropNames as boxStylePropNames };

export default withContext(BoxContainer);
