// @ts-nocheck
/* eslint-disable react/jsx-filename-extension */
import React, { ComponentProps } from 'react';
// @ts-ignore
import { TextInput as BaseTextInput } from '@react-platform/native';

import { Box, Text } from '../../../atoms';
import { boxStylePropNames } from '../../../atoms/Box/Box';
import { textStylePropNames } from '../../../atoms/Text/Text';

const extractStyles = (props: any) => {
  const res: any = Object.keys(props).reduce((acc, propName) => {
    if (boxStylePropNames.concat(textStylePropNames).includes(propName)) { // @ts-ignore
      acc.styles[propName] = props[propName];
    } else { // @ts-ignore
      acc.props[propName] = props[propName];
    }

    return acc;
  }, { props: {}, styles: {} });

  return [res.styles, res.props];
}

const TextInput = ({ ...propsAndStyles }) => {
  const [styles, props] = extractStyles(propsAndStyles);

  return (
    <BaseTextInput
      components={{ View: Box, Text }}
      style={styles}
      {...props}
    />
  )
}
// const TextInput = ({
//   placeholder,
//   value,
//   fontSize,
//   fontFamily,
//   color,
//   children,
//   ...props
// }: ComponentProps<typeof Box> & {
//   placeholder?: string,
//   value?: string,
//   fontSize?: string,
//   fontFamily?: string,
//   color?: string,
// }) => (
//   <Box name="TextInput" {...props}>
//     <Text
//       fontSize={fontSize}
//       fontFamily={fontFamily}
//       color={color}
//     >
//       {value || placeholder}
//     </Text>
//   </Box>
  
// );

export default TextInput;
