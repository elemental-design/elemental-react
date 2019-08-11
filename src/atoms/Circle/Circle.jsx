// @flow
import React, { type ElementProps } from 'react';
import { Platform } from 'react-primitives';
import { withTheme } from 'styled-components/primitives';
import { themeGet } from '@styled-system/theme-get';
import { Svg, Circle as SvgCircle } from 'react-primitives-svg';

import Box from '../Box';

type Props = {
  size: number,
  borderRadius: number | string,
  borderColor: string,
  borderWidth: number,
  bg: string,
};

const Circle = (props: ElementProps<typeof Box> & Props) => {
  if (Platform.OS === 'sketch') {
    const {
      size, borderColor, borderRadius, borderWidth, bg, ...boxProps
    } = props;

    const fill = themeGet(`colors.${bg}`, 'green')(props);

    return (
      <Box {...boxProps}>
        <Svg
          height={size}
          width={size}
        >
          <SvgCircle
            cx={borderRadius}
            cy={borderRadius}
            r={borderRadius}
            fill={fill}
            stroke={borderColor}
            strokeWidth={borderWidth}
          />
        </Svg>
      </Box>
    );
  }

  return (
    <Box {...props} />
  );
};

Circle.defaultProps = {
  size: 32,
  borderRadius: '50%',
  borderColor: 'black',
  borderWidth: 1,
};

export default withTheme(Circle);
