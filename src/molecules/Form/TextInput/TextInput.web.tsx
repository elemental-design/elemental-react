// @flow
/* eslint-disable react/jsx-filename-extension */
import React, { ComponentProps, forwardRef } from 'react';
import { border } from 'styled-system';
import styled from '../../../styled';

// import { Platform } from 'react-primitives';

import { Box } from '../../../atoms';
import { mixin as textMixin } from '../../../atoms/Text/Text';

const BoxWithText = styled(Box)`
  ${textMixin}
  ${border}
`;

const Input = forwardRef((props: ComponentProps<typeof Box>, ref: any) => <BoxWithText ref={ref} as="input" {...props} />);

Input.defaultProps = {
  borderStyle: 'solid',
};

export default Input;
