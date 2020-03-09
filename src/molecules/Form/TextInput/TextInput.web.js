// @flow
/* eslint-disable react/jsx-filename-extension */
import React, { type ElementProps } from 'react';
// import { Platform } from 'react-primitives';

import { Box } from '../../../atoms';

const Input = (props: ElementProps<typeof Box>) => <Box as="input" {...props} />;

export default Input;
