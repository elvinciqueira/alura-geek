import styled from 'styled-components';
import {
  compose,
  space,
  layout,
  flexbox,
  border,
  position,
  color,
  grid,
  GridProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from 'styled-system';

export type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  GridProps &
  PositionProps;

export const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  compose(space, grid, color, layout, flexbox, border, position),
);
