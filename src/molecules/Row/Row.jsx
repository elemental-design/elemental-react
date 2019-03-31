// @flow
import React from 'react';

import { Box } from '../../atoms';

const Row = ({ center, wrap, ...props }: {
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
