import React, { ComponentType } from 'react';
import { Platform } from 'react-primitives';

import useHover from './use-hover';

type ButtonState = 'idle' | 'hover' | 'focus';

const useStyleState = (props: { [key: string]: any }) => {
  let state;
  let hoverRef;
  if (Platform.OS === 'web') {
    const [ref, isHovered] = useHover();
    hoverRef = ref;

    if (isHovered) {
      state = 'hover';
    }
  } else if (Platform.OS === 'sketch') {
    ({ state } = props);
  }

  return state ? [hoverRef, props[state]] : [hoverRef, {}];
};

export default useStyleState;
