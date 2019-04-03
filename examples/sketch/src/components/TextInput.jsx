import React, { Fragment } from 'react';
import { Line, TextInput } from 'elemental-react/dist/sketchBundle.js';

const InputField = ({ label, placeholder, error, value = '', children, ...props }) => (
  <Fragment>
    <TextInput fontSize={18} mb="6px" fontWeight={!value ? 600 : undefined} value={value || placeholder || label} {...props} />
    <Line height={1} width="100%" bg="#D8D8D8" />
  </Fragment>
);
export default InputField;
