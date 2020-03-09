// Credit: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-sketchapp

type NumberProp = string | number;
type NumberArrayProp = [NumberProp] | NumberProp;

interface FillProps {
  fill?: string;
  fillOpacity?: NumberProp;
  fillRule?: 'evenodd' | 'nonzero';
}

interface ClipProps {
  clipRule?: 'evenodd' | 'nonzero';
  clipPath?: string;
}

interface DefinationProps {
  name?: string;
}

interface StrokeProps {
  stroke?: string;
  strokeWidth?: NumberProp;
  strokeOpacity?: NumberProp;
  strokeDasharray?: NumberArrayProp;
  strokeDashoffset?: NumberProp;
  strokeLinecap?: 'butt' | 'square' | 'round';
  strokeLinejoin?: 'miter' | 'bevel' | 'round';
  strokeMiterlimit?: NumberProp;
}

interface TransformProps {
  scale?: NumberProp;
  scaleX?: NumberProp;
  scaleY?: NumberProp;
  rotate?: NumberProp;
  rotation?: NumberProp;
  translate?: NumberProp;
  translateX?: NumberProp;
  translateY?: NumberProp;
  x?: NumberProp;
  y?: NumberProp;
  origin?: NumberProp;
  originX?: NumberProp;
  originY?: NumberProp;
  skew?: NumberProp;
  skewX?: NumberProp;
  skewY?: NumberProp;
  transform?: object | string;
}

interface PathProps
  extends FillProps,
  StrokeProps,
  ClipProps,
  TransformProps,
  DefinationProps { }

// normal | italic | oblique | inherit
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-style
type FontStyle = 'normal' | 'italic' | 'oblique';

// normal | small-caps | inherit
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-variant
type FontVariant = 'normal' | 'small-caps';

// normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-weight
type FontWeight =
  | 'normal'
  | 'bold'
  | 'bolder'
  | 'lighter'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

// normal | wider | narrower | ultra-condensed | extra-condensed |
// condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded | inherit
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-stretch
type FontStretch =
  | 'normal'
  | 'wider'
  | 'narrower'
  | 'ultra-condensed'
  | 'extra-condensed'
  | 'condensed'
  | 'semi-condensed'
  | 'semi-expanded'
  | 'expanded'
  | 'extra-expanded'
  | 'ultra-expanded';

// <absolute-size> | <relative-size> | <length> | <percentage> | inherit
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-size
type fontSize = NumberProp;

// [[<family-name> | <generic-family>],]* [<family-name> | <generic-family>] | inherit
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-family
type FontFamily = string;

/*
    font syntax [ [ <'font-style'> || <font-variant-css21> ||
    <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] |
    caption | icon | menu | message-box | small-caption | status-bar
    where <font-variant-css21> = [ normal | small-caps ]
    Shorthand property for setting ‘font-style’, ‘font-variant’,
    ‘font-weight’, ‘font-size’, ‘line-height’ and ‘font-family’.
    The ‘line-height’ property has no effect on text layout in SVG.
    Note: for the purposes of processing the ‘font’ property in SVG,
    'line-height' is assumed to be equal the value for property ‘font-size’
    https://www.w3.org/TR/SVG11/text.html#FontProperty
    https://developer.mozilla.org/en-US/docs/Web/CSS/font
    https://drafts.csswg.org/css-fonts-3/#font-prop
    https://www.w3.org/TR/CSS2/fonts.html#font-shorthand
    https://www.w3.org/TR/CSS1/#font
*/
type Font = object;

// start | middle | end | inherit
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor
type TextAnchor = 'start' | 'middle' | 'end';

// none | underline | overline | line-through | blink | inherit
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-decoration
type TextDecoration =
  | 'none'
  | 'underline'
  | 'overline'
  | 'line-through'
  | 'blink';

// normal | <length> | inherit
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/letter-spacing
type LetterSpacing = NumberProp;

// normal | <length> | inherit
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/word-spacing
type WordSpacing = NumberProp;

// auto | <length> | inherit
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/kerning
type Kerning = NumberProp;

/*
Name: font-variant-ligatures
Value: normal | none | [ <common-lig-values> || <discretionary-lig-values> ||
  <historical-lig-values> || <contextual-alt-values> ]
    Initial: normal
    Applies to: all elements
    Inherited: yes
    Percentages: N/A
    Media: visual
    Computed value: as specified
    Animatable: no
 Ligatures and contextual forms are ways of combining glyphs to produce more harmonized forms.
 <common-lig-values>        = [ common-ligatures | no-common-ligatures ]
 <discretionary-lig-values> = [ discretionary-ligatures | no-discretionary-ligatures ]
 <historical-lig-values>    = [ historical-ligatures | no-historical-ligatures ]
 <contextual-alt-values>    = [ contextual | no-contextual ]
 https://developer.mozilla.org/en/docs/Web/CSS/font-variant-ligatures
 https://www.w3.org/TR/css-fonts-3/#font-variant-ligatures-prop
*/
type FontVariantLigatures = 'normal' | 'none';

interface FontProps {
  fontStyle?: FontStyle;
  fontVariant?: FontVariant;
  fontWeight?: FontWeight;
  fontStretch?: FontStretch;
  fontSize?: fontSize;
  fontFamily?: FontFamily;
  textAnchor?: TextAnchor;
  textDecoration?: TextDecoration;
  letterSpacing?: LetterSpacing;
  wordSpacing?: WordSpacing;
  kerning?: Kerning;
  fontVariantLigatures?: FontVariantLigatures;
  font?: Font;
}

/*
 Name Value Initial value Animatable
 lengthAdjust spacing | spacingAndGlyphs spacing yes
 https://svgwg.org/svg2-draft/text.html#TextElementLengthAdjustAttribute
 https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/lengthAdjust
 */
type LengthAdjust = 'spacing' | 'spacingAndGlyphs';

/*
 Name Value Initial value Animatable
 textLength <length> | <percentage> | <number> See below yes
 https://svgwg.org/svg2-draft/text.html#TextElementTextLengthAttribute
 https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/textLength
*/
type TextLength = NumberProp;

/*
 2.2. Transverse Box Alignment: the vertical-align property
 Name: vertical-align
 Value: <‘baseline-shift’> || <‘alignment-baseline’>
 Initial: baseline
 Applies to: inline-level boxes
 Inherited: no
 Percentages: N/A
 Media: visual
 Computed value: as specified
 Canonical order: per grammar
 Animation type: discrete
 This shorthand property specifies how an inline-level box is aligned within the line.
 Values are the same as for its longhand properties, see below.
 Authors should use this property (vertical-align) instead of its longhands.
 https://www.w3.org/TR/css-inline-3/#transverse-alignment
 https://drafts.csswg.org/css-inline/#propdef-vertical-align
 */
type VerticalAlign = NumberProp;

/*
 Name: alignment-baseline
 1.1 Value: auto | baseline | before-edge | text-before-edge | middle | central |
 after-edge | text-after-edge | ideographic | alphabetic | hanging | mathematical | inherit
 2.0 Value: baseline | text-bottom | alphabetic | ideographic | middle | central |
 mathematical | text-top | bottom | center | top
 Initial: baseline
 Applies to: inline-level boxes, flex items, grid items, table cells
 Inherited: no
 Percentages: N/A
 Media: visual
 Computed value: as specified
 Canonical order: per grammar
 Animation type: discrete
 https://drafts.csswg.org/css-inline/#propdef-alignment-baseline
 https://www.w3.org/TR/SVG11/text.html#AlignmentBaselineProperty
 https://svgwg.org/svg2-draft/text.html#AlignmentBaselineProperty
 https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/alignment-baseline
*/
type AlignmentBaseline =
  | 'baseline'
  | 'text-bottom'
  | 'alphabetic'
  | 'ideographic'
  | 'middle'
  | 'central'
  | 'mathematical'
  | 'text-top'
  | 'bottom'
  | 'center'
  | 'top'
  | 'text-before-edge'
  | 'text-after-edge'
  | 'before-edge'
  | 'after-edge'
  | 'hanging';

/*
 2.2.2. Alignment Shift: baseline-shift longhand
 Name: baseline-shift
 Value: <length> | <percentage> | sub | super
 Initial: 0
 Applies to: inline-level boxes
 Inherited: no
 Percentages: refer to the used value of line-height
 Media: visual
 Computed value: absolute length, percentage, or keyword specified
 Animation type: discrete
 This property specifies by how much the box is shifted up from its alignment point.
 It does not apply when alignment-baseline is top or bottom.
 https://www.w3.org/TR/css-inline-3/#propdef-baseline-shift
*/
type BaselineShift =
  | 'sub'
  | 'super'
  | 'baseline'
  | [NumberProp]
  | NumberProp;

/*
 6.12. Low-level font feature settings control: the font-feature-settings property
 Name: font-feature-settings
 Value: normal | <feature-tag-value> #
 Initial: normal
 Applies to: all elements
 Inherited: yes
 Percentages: N/A
 Media: visual
 Computed value: as specified
 Animatable: no
    This property provides low-level control over OpenType font features.
    It is intended as a way of providing access to font features
    that are not widely used but are needed for a particular use case.
    Authors should generally use ‘font-variant’ and its related subproperties
    whenever possible and only use this property for special cases where its use
    is the only way of accessing a particular infrequently used font feature.
    enable small caps and use second swash alternate
    font-feature-settings: "smcp", "swsh" 2;
    A value of ‘normal’ means that no change in glyph selection or positioning
    occurs due to this property.
    Feature tag values have the following syntax:
    <feature-tag-value> = <string> [ <integer> | on | off ]?
    The <string> is a case-sensitive OpenType feature tag. As specified in the
    OpenType specification, feature tags contain four ASCII characters.
    Tag strings longer or shorter than four characters,
    or containing characters outside the U+20–7E codepoint range are invalid.
    Feature tags need only match a feature tag defined in the font,
    so they are not limited to explicitly registered OpenType features.
    Fonts defining custom feature tags should follow the tag name rules
    defined in the OpenType specification [OPENTYPE-FEATURES].
    Feature tags not present in the font are ignored;
    a user agent must not attempt to synthesize fallback behavior based on these feature tags.
    The one exception is that user agents may synthetically support the kern feature with fonts
    that contain kerning data in the form of a ‘kern’ table but lack kern feature
    support in the ‘GPOS’ table.
    In general, authors should use the ‘font-kerning’ property to explicitly
    enable or disable kerning
    since this property always affects fonts with either type of kerning data.
    If present, a value indicates an index used for glyph selection.
    An <integer> value must be 0 or greater.
    A value of 0 indicates that the feature is disabled.
    For boolean features, a value of 1 enables the feature.
    For non-boolean features, a value of 1 or greater enables the
    feature and indicates the feature selection index.
    A value of ‘on’ is synonymous with 1 and ‘off’ is synonymous with 0.
    If the value is omitted, a value of 1 is assumed.
    font-feature-settings: "dlig" 1;       /* dlig=1 enable discretionary ligatures * /
    font-feature-settings: "smcp" on;      /* smcp=1 enable small caps * /
    font-feature-settings: 'c2sc';         /* c2sc=1 enable caps to small caps * /
    font-feature-settings: "liga" off;     /* liga=0 no common ligatures * /
    font-feature-settings: "tnum", 'hist'; /* tnum=1, hist=1 enable tabular numbers
                                              and historical forms * /
    font-feature-settings: "tnum" "hist";  /* invalid, need a comma-delimited list * /
    font-feature-settings: "silly" off;    /* invalid, tag too long * /
    font-feature-settings: "PKRN";         /* PKRN=1 enable custom feature * /
    font-feature-settings: dlig;           /* invalid, tag must be a string * /
    When values greater than the range supported by the font are specified,
    the behavior is explicitly undefined.
    For boolean features, in general these will enable the feature.
    For non-boolean features, out of range values will in general be equivalent to a 0 value.
    However, in both cases the exact behavior will depend upon the way the font is designed
    (specifically, which type of lookup is used to define the feature).
    Although specifically defined for OpenType feature tags,
    feature tags for other modern font formats that support font features
    may be added in the future.
    Where possible, features defined for other font formats
    should attempt to follow the pattern of registered OpenType tags.
    The Japanese text below will be rendered with half-width kana characters:
    body { font-feature-settings: "hwid"; /* Half-width OpenType feature * / }
    <p>毎日カレー食べてるのに、飽きない</p>
    https://drafts.csswg.org/css-fonts-3/#propdef-font-feature-settings
    https://developer.mozilla.org/en/docs/Web/CSS/font-feature-settings
*/
type FontFeatureSettings = string;

interface TextSpecificProps extends PathProps, FontProps {
  alignmentBaseline?: AlignmentBaseline;
  baselineShift?: BaselineShift;
  verticalAlign?: VerticalAlign;
  lengthAdjust?: LengthAdjust;
  textLength?: TextLength;
  fontData?: object;
  fontFeatureSettings?: FontFeatureSettings;
}

// https://svgwg.org/svg2-draft/text.html#TSpanAttributes
interface TextProps extends TextSpecificProps {
  dx?: NumberArrayProp;
  dy?: NumberArrayProp;
}

/*
 Name
 side
 Value
 left | right
 initial value
 left
 Animatable
 yes
 https://svgwg.org/svg2-draft/text.html#TextPathElementSideAttribute
*/
type Side = 'left' | 'right';

/*
 Name
 startOffset
 Value
 <length> | <percentage> | <number>
 initial value
 0
 Animatable
 yes
 https://svgwg.org/svg2-draft/text.html#TextPathElementStartOffsetAttribute
 https://developer.mozilla.org/en/docs/Web/SVG/Element/textPath
 */
type StartOffset = NumberProp;

/*
 Name
 method
 Value
 align | stretch
 initial value
 align
 Animatable
 yes
 https://svgwg.org/svg2-draft/text.html#TextPathElementMethodAttribute
 https://developer.mozilla.org/en/docs/Web/SVG/Element/textPath
 */
type Method = 'align' | 'stretch';

/*
 Name
 spacing
 Value
 auto | exact
 initial value
 exact
 Animatable
 yes
 https://svgwg.org/svg2-draft/text.html#TextPathElementSpacingAttribute
 https://developer.mozilla.org/en/docs/Web/SVG/Element/textPath
 */
type Spacing = 'auto' | 'exact';

/*
 Name
 mid-line
 Value
 sharp | smooth
 initial value
 smooth
 Animatable
 yes
 */
type MidLine = 'sharp' | 'smooth';

// https://svgwg.org/svg2-draft/text.html#TextPathAttributes
// https://developer.mozilla.org/en/docs/Web/SVG/Element/textPath
interface TextPathProps extends TextSpecificProps {
  href: string;
  startOffset?: StartOffset;
  method?: Method;
  spacing?: Spacing;
  side?: Side;
  midLine?: MidLine;
}
type Color = string | number;

interface Style {
  shadowColor?: Color;
  shadowOffset?: { width?: number; height?: number };
  shadowOpacity?: number;
  shadowRadius?: number;
  width?: number;
  height?: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  margin?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  padding?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  borderWidth?: number;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  position?: 'absolute' | 'relative';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'wrap' | 'nowrap';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch';
  overflow?: 'visible' | 'hidden' | 'scroll';
  flex?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number;
  aspectRatio?: number;
  zIndex?: number;
  backfaceVisibility?: 'visible' | 'hidden';
  backgroundColor?: Color;
  borderColor?: Color;
  borderTopColor?: Color;
  borderRightColor?: Color;
  borderBottomColor?: Color;
  borderLeftColor?: Color;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderStyle?: 'solid' | 'dotted' | 'dashed';
  opacity?: number;
}
type StyleReference = number;
interface ResizeConstraints {
  top: boolean;
  right: boolean;
  bottom: boolean;
  left: boolean;
  fixedHeight: boolean;
  fixedWidth: boolean;
}
interface SketchShadow {
  shadowColor: Color;
  shadowOffset: { width: number; height: number };
  shadowSpread: number;
  shadowOpacity: number;
  shadowRadius: number;
  shadowInner: boolean;
}

interface ViewProps {
  name?: string;
  children?: React.ReactNode[] | React.ReactNode;
  style?: Style | StyleReference;
  resizingConstraint?: ResizeConstraints;
  shadows?: SketchShadow[];
}

declare module 'react-primitives-svg' {
  export interface CircleProps extends PathProps {
    cx: NumberProp;
    cy: NumberProp;
    r: NumberProp;
  }
  export interface EllipseProps extends PathProps {
    cx: NumberProp;
    cy: NumberProp;
    rx: NumberProp;
    ry: NumberProp;
  }
  export interface GProps extends PathProps, FontProps { }

  export interface LinearGradientProps {
    x1: NumberProp;
    x2: NumberProp;
    y1: NumberProp;
    y2: NumberProp;
    gradientUnits?: 'objectBoundingBox' | 'userSpaceOnUse';
    id?: string;
    children?: React.ReactNode[] | React.ReactNode;
  }
  export interface RadialGradientProps {
    fx: NumberProp;
    fy: NumberProp;
    rx?: NumberProp;
    ry?: NumberProp;
    cx: NumberProp;
    cy: NumberProp;
    r?: NumberProp;
    gradientUnits?: 'objectBoundingBox' | 'userSpaceOnUse';
    id: string;
    children?: React.ReactNode[] | React.ReactNode;
  }
  export interface LineProps extends PathProps {
    x1: NumberProp;
    x2: NumberProp;
    y1: NumberProp;
    y2: NumberProp;
  }

  export interface PathPathProps extends PathProps {
    d: string;
  }

  export interface PolygonProps extends PathProps {
    points: string;
  }

  export interface PolylineProps extends PathProps {
    points: string;
  }

  export interface RectProps extends PathProps {
    x: NumberProp;
    y: NumberProp;
    width: NumberProp;
    height: NumberProp;
    rx?: NumberProp;
    ry?: NumberProp;
  }

  export interface SymbolProps {
    id: string;
    viewBox?: string;
    preserveAspectRatio?: string;
    children: React.ReactNode[] | React.ReactNode;
  }

  export class Text extends React.Component<TextProps> {
    getChildContext(): { isInAParentText: boolean };
  }

  export interface UseProps extends PathProps {
    href: string;
    width?: NumberProp; // Just for reusing `Symbol`
    height?: NumberProp; //  Just for reusing `Symbol`
  }

  export interface DefsProps {
    children: React.ReactNode[] | React.ReactNode;
  }

  export interface StopProps {
    stopColor?: string;
    stopOpacity?: NumberProp;
    children?: React.ReactNode[] | React.ReactNode;
  }

  export interface SvgProps extends ViewProps {
    opacity?: string | number;
    width?: string | number;
    height?: string | number;
    // more detail https://svgwg.org/svg2-draft/coords.html#ViewBoxAttribute
    viewBox?: string;
    preserveAspectRatio?: string;
  }

  export interface ClipPathProps {
    id: string;
    children?: React.ReactNode[] | React.ReactNode;
  }
  export interface ImageProps {
    x?: NumberProp;
    y?: NumberProp;
    width: NumberProp;
    height: NumberProp;
    href: string;
    preserveAspectRatio?: string;
    children?: React.ReactNode[] | React.ReactNode;
  }
  export interface PatternProps {
    x1?: NumberProp;
    x2?: NumberProp;
    y1?: NumberProp;
    y2?: NumberProp;
    patternTransform?: string;
    patternUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
    patternContentUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
    children?: React.ReactNode[] | React.ReactNode;
  }
  type TSpanProps = TextProps & {};
  



  export class Svg extends React.Component<SvgProps> {
    static Circle: new (props: CircleProps) => Circle;
    static ClipPath: new (props: ClipPathProps) => ClipPath;
    static Defs: new (props: DefsProps) => Defs;
    static Ellipse: new (props: EllipseProps) => Ellipse;
    static G: new (props: GProps) => G;
    static Image: new (props: ImageProps) => Image;
    static Line: new (props: LineProps) => Line;
    static LinearGradient: new (props: LinearGradientProps) => LinearGradient;
    static Path: new (props: PathProps) => Path;
    static Pattern: new (props: PatternProps) => Pattern;
    static Polygon: new (props: PolygonProps) => Polygon;
    static Polyline: new (props: PolylineProps) => Polyline;
    static RadialGradient: new (props: RadialGradientProps) => RadialGradient;
    static Rect: new (props: RectProps) => Rect;
    static Stop: new (props: StopProps) => Stop;
    static Symbol: new (props: SymbolProps) => Symbol;
    static Text: new (props: TextProps) => Text;
    static TextPath: new (props: TextPathProps) => TextPath;
    static TSpan: new (props: TSpanProps) => TSpan;
    static Use: new (props: UseProps) => Use;
  }
  export class TSpan extends React.Component<TSpanProps> {
    getChildContext(): { isInAParentText: boolean };
  }
  export class TextPath extends React.Component<TextPathProps> { }
  export class Pattern extends React.Component<PatternProps> { }
  export class Image extends React.Component<ImageProps> { }
  export class ClipPath extends React.Component<ClipPathProps> { }
  export class Stop extends React.Component<StopProps> { }
  export class Defs extends React.Component<DefsProps> { }
  export class Use extends React.Component<UseProps> { }
  export class Symbol extends React.Component<SymbolProps> { }
  export class Rect extends React.Component<RectProps> { }
  export class Polyline extends React.Component<PolylineProps> { }
  export class Polygon extends React.Component<PolygonProps> { }
  export class Path extends React.Component<PathPathProps> { }
  export class Line extends React.Component<LineProps> { }
  export class RadialGradient extends React.Component<RadialGradientProps> { }
  export class LinearGradient extends React.Component<LinearGradientProps> { }
  export class G extends React.Component<GProps> { }
  export class Ellipse extends React.Component<EllipseProps> { }
  export class Circle extends React.Component<CircleProps> { }
  
}
