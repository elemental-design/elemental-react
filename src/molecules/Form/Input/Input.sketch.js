// @flow
/* eslint-disable react/jsx-filename-extension */
import React, { type ElementProps } from 'react';

import { Box, Text } from '../../../atoms';

const Input = ({ // $FlowFixMe: suppressing this error until we can refactor
  value, placeholder, children, ...props
}: ElementProps<typeof Box> & {
  placeholder?: string,
  value?: string,
}) => (
  <Text {...props}>
    {placeholder || value}
  </Text>
);

export default Input;
