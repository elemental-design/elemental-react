// @flow
import React, { type ElementProps } from 'react';

import styled from '../../styled';

import Box from '../Box';


const Button = styled(Box)``;

Button.defaultProps = {
  borderWidth: 1,
  p: 3,
  pl: 4,
  pr: 4,
  borderColor: 'black',
  justifyContent: 'center',
  alignItems: 'center',
};

export default Button;
