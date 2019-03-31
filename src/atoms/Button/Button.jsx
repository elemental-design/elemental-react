// @flow
import React, { type ElementProps } from 'react';
import { Platform } from 'react-primitives';

import Box from '../Box';

let ButtonComp = Box;

if (Platform.OS === 'web') {
  ButtonComp = (props: ElementProps<typeof Box>) => <Box as="button" {...props} />;
}

const Button = (props: ElementProps<typeof Box>) => <ButtonComp {...props} />;

Button.defaultProps = {
  borderWidth: 1,
  p: 3,
  pl: 4, pr: 4,
  borderColor: 'black',
  justifyContent: 'center',
  alignItems: 'center',
};

export default Button;
