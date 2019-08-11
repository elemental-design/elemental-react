import { style } from 'styled-system';

export const borderBottomWidth = style({
  prop: 'borderBottomWidth',
  cssProperty: 'border-bottom-width',
  transformValue: n => `${n}px`,
});
export const borderBottomColor = style({
  prop: 'borderBottomColor',
  cssProperty: 'border-bottom-color',
});
export const borderTopWidth = style({
  prop: 'borderTopWidth',
  cssProperty: 'border-top-width',
  transformValue: n => `${n}px`,
});
export const borderTopColor = style({
  prop: 'borderTopColor',
  cssProperty: 'border-top-color',
});
export const borderLeftWidth = style({
  prop: 'borderLeftWidth',
  cssProperty: 'border-left-width',
  transformValue: n => `${n}px`,
});
export const borderLeftColor = style({
  prop: 'borderLeftColor',
  cssProperty: 'border-left-color',
});
export const borderRightWidth = style({
  prop: 'borderRightWidth',
  cssProperty: 'border-right-width',
  transformValue: n => `${n}px`,
});
export const borderRightColor = style({
  prop: 'borderRightColor',
  cssProperty: 'border-right-color',
});
export const borderStyle = style({
  prop: 'borderStyle',
  cssProperty: 'border-style',
});
