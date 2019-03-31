import React from 'react';
import styled from 'styled-components/primitives';

import { Box } from '../../atoms';

const Row = ({ center, wrap, ...props }) => {

  return (
    <Box
      {...(center && { justifyContent: 'center' })}
      {...(wrap && { flexWrap: 'wrap' })}
      {...props} />
  );
};

Row.defaultProps = {
  flexDirection: 'row',
};

export default Row;
