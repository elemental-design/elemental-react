// @flow
import React, { type ElementProps } from 'react';
import Box from '../Box';


const Circle = (props: ElementProps<typeof Box>) => <Box {...props} />;

Circle.defaultProps = {
  borderRadius: '50%',
  borderColor: 'black',
  borderWidth: 1,
};

export default Circle;
