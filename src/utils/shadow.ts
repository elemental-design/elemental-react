import { Platform } from 'react-primitives';

function rgbToHex(r: number, g: number, b: number) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

// Shadow parsing functions adapted from https://github.com/jxnblk/css-box-shadow | MIT
const VALUES_REG = /,(?![^(]*\))/
const PARTS_REG = /\s(?![^(]*\))/
const LENGTH_REG = /^[0-9]+[a-zA-Z%]+?$/

type Shadow = {
  inset: boolean,
  offsetX: number,
  offsetY: number,
  blurRadius: number,
  spreadRadius: number,
  color: string,
};

const parseValue = (str: string) => {
  const parts = str.split(PARTS_REG)
  const inset = parts.includes('inset')
  const last = parts.slice(-1)[0]
  // const color = !isLength(last) ? last : str.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)/g) || undefined
  let color: string[] | string | undefined = str.match(/(#([0-9a-f]{3}){1,2}|(rgba|hsla)\(\d{1,3}%?(,\s?\d{1,3}%?){2},\s?(1|0|0?\.\d+)\)|(rgb|hsl)\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))/g) || undefined;
  color = Array.isArray(color) && color.length === 1 ? color[0] : undefined;

  const nums = parts
    .filter((n) => n !== 'inset')
    // @ts-ignore
    .filter((n) => n !== color)
    .map(toNum)
  const [offsetX, offsetY, blurRadius, spreadRadius] = nums

  return {
    inset,
    offsetX,
    offsetY,
    blurRadius,
    spreadRadius,
    color,
  }
}

const isLength = (v: string) => v === '0' || LENGTH_REG.test(v)
const toNum = (v: any): number => {
  if (!/px$/.test(v) && v !== '0') return v
  const n = parseFloat(v)
  return !isNaN(n) ? n : v
}

const parse = (str: string) =>
  str
    .split(VALUES_REG)
    .map((s) => s.trim())
    .map(parseValue)

const parseRgba = (color: string) => {
  const [r, g, b, a = 1] = color
    .replace('rgba', '')
    .slice(1, -1)
    .split(',')
    .map((n) => Number(n.trim()))
  return {r, g, b, a}
}

/*
const makeCss = ({shadowColor, shadowOffset, shadowOpacity, shadowRadius, shadowSpread}) => `
  shadow-color: ${shadowColor};
  shadow-offset: ${shadowOffset.width || 0}px ${shadowOffset.height || 0}px;
  shadow-opacity: ${shadowOpacity || 1};
  shadow-radius: ${shadowRadius || 0}px;
  ${shadowSpread ? `shadow-spread: ${shadowSpread};` : ''} 
`
*/

export const makeShadow = (_shadow: (_: {}) => string | string, elevation: number | undefined | null | void = 1, isArray?: boolean) => {
  switch (Platform.OS) {
    case 'web': {
      return { boxShadow: _shadow };
    }
    case 'ios':
    case 'sketch':
    case 'figma': {
      let shadows: Shadow[] | string | any = typeof _shadow === 'function' ? _shadow({}) : _shadow
      shadows = typeof shadows === 'string' ? parse(shadows) : shadows

      // TODO: Need a non-hacky way to pass shadow arrays to Figma/React Native
      const res = ((Array.isArray(shadows) && shadows) || []).map((shadow: any) => {  
        const { inset, offsetX, offsetY, blurRadius, spreadRadius, color } = shadow
  
        const rgba: { r: number, g: number, b: number, a: number } | null = color.includes('rgba') ? parseRgba(color) : null
        const {r, g, b, a: opacity = 1} = rgba || {};
  
        return {
          shadowColor: rgba && r && g && b ? rgbToHex(r, g, b) : color,
          shadowInner: inset,
          // shadowOffset: {width: offsetX, height: offsetY},
          shadowOffset: isArray ? { width: offsetX, height: offsetY } : `${offsetX}px ${offsetY}px`,
          shadowOpacity: opacity,
          shadowRadius: blurRadius,
          shadowSpread: Platform.OS === 'sketch' ? spreadRadius || 0 : undefined, // *shadowSpread* not supported in RN
        };
      });
      const [shadow] = res || [];

      return isArray ? res : shadow;
    }
    case 'android': {
      return { elevation: elevation };
    }
    default: {
      return ''
    }
  }
}
