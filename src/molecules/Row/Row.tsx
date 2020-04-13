import React, { ComponentProps } from 'react';

import Box from '../../atoms/Box';

const Row = ({ center, wrap, ...props }: ComponentProps<typeof Box> & {
  center?: boolean,
  wrap?: boolean,
}) => (
  <Box
    {...(center ? { justifyContent: 'center' } : {})}
    {...(wrap ? { flexWrap: 'wrap' } : {})}
    {...props}
  />
);

Row.defaultProps = {
  flexDirection: 'row',
  center: false,
  wrap: false,
};

export default Row;
