import React, { ComponentProps, FC } from 'react';

import Box from '../../atoms/Box';

type RowProps = ComponentProps<typeof Box> & {
  center?: boolean,
  wrap?: boolean,
};

const Row: FC<RowProps> = ({ center, wrap, ...props }: RowProps) => (
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
