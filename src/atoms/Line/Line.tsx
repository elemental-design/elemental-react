import { ComponentType, ComponentProps } from 'react';
import { opacity } from 'styled-system';

import styled from '../../styled';

import Rectangle from '../Rectangle';

type LineProps = ComponentProps<typeof Rectangle> & {};

const Line: ComponentType<LineProps> = styled(Rectangle)``;

Line.defaultProps = {
  width: 64,
  height: 1,
  bg: 'black',
  borderWidth: 0,
};

export default Line;
