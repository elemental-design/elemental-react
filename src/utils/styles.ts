// @ts-nocheck
import { system } from '@styled-system/core';

export const cursor = system({
  transform: {
    property: 'cursor',
    scale: 'cursors',
  },
});

export const transform = system({
  transform: {
    property: 'transform',
    scale: 'transforms',
  },
});

export const shadowColor = system({
  shadowColor: {
    property: 'shadowColor',
    scale: 'shadowColors',
  },
});
export const shadowOffset = system({
  shadowOffset: {
    property: 'shadowOffset',
    scale: 'shadowOffsets',
  },
});
export const shadowOpacity = system({
  shadowOpacity: {
    property: 'shadowOpacity',
    scale: 'shadowOpacities',
  },
});
export const shadowRadius = system({
  shadowRadius: {
    property: 'shadowRadius',
    scale: 'shadowRadii',
  },
});
export const shadowSpread = system({
  shadowSpread: {
    property: 'shadowSpread',
    scale: 'shadowSpreads',
  },
});

// Sketch only
export const shadowInner = system({
  shadowSpread: {
    property: 'shadowInner',
    scale: 'shadowInners',
  },
});

export const elevation = system({
  elevation: {
    property: 'elevation',
    scale: 'elevations',
  },
});
