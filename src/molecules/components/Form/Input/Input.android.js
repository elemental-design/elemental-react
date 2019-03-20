// @flow
/* eslint-disable react/jsx-filename-extension */
import React, { type ElementProps } from 'react';
import { TextInput } from 'react-native-web';

// import { Box } from '../../../../atoms/components';

// TODO: Wrap styling into this
const Input = (props: ElementProps<typeof TextInput>) => <TextInput {...props} />;

export default Input;
