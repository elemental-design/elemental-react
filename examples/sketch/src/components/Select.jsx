import React from 'react';
import { Box, Line, Text } from 'elemental-react/dist/sketchBundle.js';

const Select = ({ label, placeholder, error, value = '', ...props }) => (
  <Box {...props}>
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <Text fontSize={18} fontWeight={!value ? 600 : undefined} mb="6px">
        {value || placeholder || label}
      </Text>
      <Line height="2px" width="2px" mr={2} bg="#000000" />
    </Box>
    <Line height={1} width="100%" bg="#D8D8D8" />
  </Box>
);
export default Select;
