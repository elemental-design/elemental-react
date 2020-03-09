// @flow
/* eslint-disable react/jsx-filename-extension */
import React, { ComponentProps } from 'react';
// @ts-ignore
import { TextInput } from 'react-native-web';

// import { Box } from '../../../../atoms/components';

// TODO: Wrap styling into this
const Input = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;

export default Input;
