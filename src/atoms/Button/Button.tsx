import React, { ComponentProps, ReactNode, useState } from 'react';
import { Platform } from 'react-primitives';

import Row from '../../molecules/Row';
import Text from '../Text';
import { parseAttributes } from '../../utils';
import { useDesign, withDesign, withStyles } from '../../ThemeProvider';
import { InteractiveState } from '../Box/Box';

type Props = {
  children: (_: Object) => ReactNode | ReactNode | string,
  outlined?: boolean,
  label?: string,
};

const ButtonText = withStyles(Text, {
  fontFamily: 'button',
  fontSize: 'button',
  mb: 0,
});
ButtonText.displayName = 'ButtonText';



const Button = (rawProps: ComponentProps<typeof Row> & Props) => {
  const design = useDesign('Button');
  const props: ComponentProps<typeof Row> & Props & ComponentProps<typeof Text> = {
    ...rawProps,
    ...design,
  };
  const { outlined, children: childrenProp, disabled, styles: pseudoStyles, borderWidth = 1, label, ...styles } = props;
  // @ts-ignore
  const resolvedPseudoStyles = (props.pseudoState && props.pseudoState !== 'idle' && { ...pseudoStyles[props.pseudoState] }) || {} as any;
  // const pseudoState = Platform.OS === 'sketch' ? props.pseudoState || 'idle' : 'idle';

  const attributes = parseAttributes(
    (outlined || (borderWidth && borderWidth !== 1)) && { borderWidth }, // @ts-ignore
    disabled && { ...pseudoStyles.disabled },
  );
  const { color, fontSize, fontFamily, fontWeight, lineHeight, letterSpacing } = { ...styles, ...attributes };

  const children = (label || typeof childrenProp === 'string') ? (
    <ButtonText color={resolvedPseudoStyles.color || color} fontSize={fontSize} fontFamily={fontFamily} fontWeight={fontWeight} letterSpacing={letterSpacing} lineHeight={lineHeight}>
      {label || childrenProp}
    </ButtonText>
  ) : typeof childrenProp === 'function'
      ? childrenProp({ bg: props.bg })
      : childrenProp;

  return (
    <Row
      as="button"
      disabled={disabled}
      styles={pseudoStyles}
      {...design}
      {...styles}
      {...attributes}
    >
      {children}
    </Row>
  );
};

Button.defaultProps = {
  outlined: true,
  p: 3,
  pl: 4,
  pr: 4,
  borderColor: 'black',
  justifyContent: 'center',
  alignItems: 'center',
};
Button.displayName = 'Button';



Button.Text = withDesign(ButtonText);

export default Button;
