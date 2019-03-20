// @flow
/* eslint-disable react/jsx-filename-extension */
import React, { type ElementProps } from 'react';
// import { Platform } from 'react-primitives';

import { Box, Text } from '../../../../atoms/components';

const Input = ({
  value, placeholder, children, ...props
}: ElementProps<typeof Box> & {
  placeholder?: string,
  value?: string,
}) => {

  return (
    <Text {...props}>
      {placeholder || value}
    </Text>
  );
};

export default Input;
