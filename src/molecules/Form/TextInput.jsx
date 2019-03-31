// @flow
/* eslint-disable quote-props */
import React, { type ElementProps } from 'react';
// import { Platform } from 'react-primitives';
import styled from 'styled-components/primitives';

import PrimitiveInput from 'react-primitives-textinput';

import { parseAttributes } from '../../utils';
import { mixin } from '../../atoms/Text/Text';

const Input = styled(PrimitiveInput)`
  ${mixin}
`;


const TextInput = ({
  level, bold, center, ...props
}: ElementProps<typeof Text> & {
  level?: number,
  bold?: boolean,
}) => {
  // const att = parseAttributes(
  //   // level && { fontSize: getSize[level] },
  // );
  const att = parseAttributes(
    bold && { fontWeight: 'bold' },
    center && { textAlign: 'center' }, // eslint-disable-next-line react/destructuring-assignment
    props.fontSize && !props.lineHeight && { lineHeight: props.fontSize },
  );

  return (
    <Input
      {...att}
      {...props}
    />
  );
};

TextInput.defaultProps = {
  borderBottomWidth: 1,
  borderBottomColor: 'black',
};

export default TextInput;
