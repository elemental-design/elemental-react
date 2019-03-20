// @flow
/* eslint-disable quote-props */
import React, { type ElementProps } from 'react';

import { Text } from '../../../atoms/components';
import { parseAttributes } from '../../../utils';

const getSize = {
  '1': 96,
  '2': 60,
  '3': 48,
  '4': 34,
  '5': 24,
  '6': 20,
  body: 16,
  body_2: 14,
  button: 14,
  caption: 12,
  overline: 10,
};

const HeadlineContainer = ({ level, ...props }: ElementProps<typeof Text> & {
  level?: number,
}) => {
  const att = parseAttributes(
    level && { fontSize: getSize[level] },
  );

  return (
    <Text
      {...att}
      {...props}
    />
  );
};

HeadlineContainer.defaultProps = {
  level: 6,
  fontFamily: 'Nunito Sans',
};

export default HeadlineContainer;
