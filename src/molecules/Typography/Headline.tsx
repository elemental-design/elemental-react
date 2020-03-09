// @flow
/* eslint-disable quote-props */
import React, { ComponentProps } from 'react';

import { Text } from '../../atoms';
import { withDesign } from '../../ThemeProvider';

const HeadlineContainer = ({ level, depth, ...props }: ComponentProps<typeof Text> & {
  level: number,
  depth?: number,
}) => (
  <Text
    fontSize={`h${level || depth}`}
    textStyle={`h${level || depth}`}
    lineHeight={`h${level || depth}`}
    {...props}
  />
);

HeadlineContainer.defaultProps = {
  level: 6,
  fontFamily: 'primary',
};

const H1 = (props: ComponentProps<typeof Text>) => <HeadlineContainer level={1} {...props} />;
H1.displayName = 'H1';
const H2 = (props: ComponentProps<typeof Text>) => <HeadlineContainer level={2} {...props} />;
H2.displayName = 'H2';
const H3 = (props: ComponentProps<typeof Text>) => <HeadlineContainer level={3} {...props} />;
H3.displayName = 'H3';
const H4 = (props: ComponentProps<typeof Text>) => <HeadlineContainer level={4} {...props} />;
H4.displayName = 'H4';
const H5 = (props: ComponentProps<typeof Text>) => <HeadlineContainer level={5} {...props} />;
H5.displayName = 'H5';
const H6 = (props: ComponentProps<typeof Text>) => <HeadlineContainer level={6} {...props} />;
H6.displayName = 'H6';

HeadlineContainer.H1 = withDesign(H1);
HeadlineContainer.H2 = withDesign(H2);
HeadlineContainer.H3 = withDesign(H3);
HeadlineContainer.H4 = withDesign(H4);
HeadlineContainer.H5 = withDesign(H5);
HeadlineContainer.H6 = withDesign(H6);

export default HeadlineContainer;
