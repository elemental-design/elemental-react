// @flow
/* eslint-disable quote-props */
import React, { type ElementProps } from 'react';

import { Text } from '../../atoms';

const HeadlineContainer = ({ level, ...props }: ElementProps<typeof Text> & {
  level: number,
}) => (
  <Text
    fontSize={`h${level}`}
    textStyle={`h${level}`}
    {...props}
  />
);

HeadlineContainer.defaultProps = {
  level: 6,
  fontFamily: 'primary',
};

export default HeadlineContainer;
