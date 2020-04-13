import React from 'react';
import { Line, TextInput } from 'elemental-react';

const InputField = ({ label, placeholder, error, value = '', children, ...props }) => (
  <>
    <TextInput fontSize={18} mb="6px" fontWeight={!value ? 600 : undefined} value={value || placeholder || label} {...props} />
    <Line height={1} width="100%" bg="#D8D8D8" />
  </>
);
export default InputField;
