import React from 'react';
import { Box, Text } from 'elemental-react';

const InputField = ({ label, placeholder, error, value = '', children, ...props }) => (
  <Box width="100%" flexDirection="column" {...props}>
    <Box mb={1} opacity={label && value.length > 0 ? 1 : 0}>
      <Text fontSize={12} color="#777777">
        {label && value.length > 0 ? label : ''}
      </Text>
    </Box>
    <Box>
      {children({ label, placeholder, error, value })}
    </Box>
    <Box height={16} mt={1} opacity={error ? 1 : 0}>
      {error && (
        <Text fontSize={10} color="#FF6A6A">
          {error}
        </Text>
      )}
    </Box>
  </Box>
);
export default InputField;
