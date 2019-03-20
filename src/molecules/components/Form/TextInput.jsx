// @flow
/* eslint-disable quote-props */
import React, { type ElementProps } from 'react';
// import { Platform } from 'react-primitives';
import styled from 'styled-components/primitives';

import PrimitiveInput from 'react-primitives-textinput';

import { mixin } from '../../../atoms/components/Text/Text';

const Input = styled(PrimitiveInput)`
  ${mixin}
`;
// import { parseAttributes } from '../../../utils';


const TextInput = ({ level, ...props }: ElementProps<typeof Text> & {
  level?: number,
}) => {
  // const att = parseAttributes(
  //   // level && { fontSize: getSize[level] },
  // );

  return (
    <Input
      // {...att}
      {...props}
    />
  );
};

TextInput.defaultProps = {
  borderBottomWidth: 1,
  borderBottomColor: 'black',
};

export default TextInput;
