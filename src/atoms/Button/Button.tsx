// @flow
import React, { ComponentProps } from 'react';

import Box from '../Box';
import Text from '../Text';
import { parseAttributes } from '../../utils';
import { useDesign, withDesign, withStyles } from '../../ThemeProvider';

type Props = {
  children: Node,
  outlined?: boolean,
};


const Button = (rawProps: ComponentProps<typeof Box> & Props) => {
  const design = useDesign('Button');
  const props: ComponentProps<typeof Box> & Props = {
    ...rawProps,
    ...design,
  };
  const { outlined, children, ...styles } = props;
  const { borderWidth = 1 } = props;

  const attributes = parseAttributes(
    outlined && { borderWidth },
  );

  return (
    <Box {...attributes} {...design} {...styles}>
      {children}
    </Box>
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

const ButtonText = withStyles(Text, {
  fontFamily: 'button',
  fontSize: 'button',
  mb: 0,
});
ButtonText.displayName = 'ButtonText';

Button.Text = withDesign(ButtonText);

export default Button;
