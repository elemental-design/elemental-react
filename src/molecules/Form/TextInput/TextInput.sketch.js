// @flow
/* eslint-disable react/jsx-filename-extension */
import React, { type ElementProps } from 'react';

import { Box, Text } from '../../../atoms';

const TextInput = ({
  placeholder,
  value,
  fontSize,
  fontFamily,
  color,
  children,
  ...props
}: ElementProps<typeof Box> & {|
  placeholder?: string,
  value?: string,
  fontSize?: string,
  fontFamily?: string,
  color?: string,
|}) => (
  <Box name="TextInput" flex={1} {...props}>
    <Text
      fontSize={fontSize}
      fontFamily={fontFamily}
      color={color}
    >
      {value || placeholder}
    </Text>
  </Box>
);

export default TextInput;
