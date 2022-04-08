import { forwardRef, Ref } from 'react';
import styled, { css } from 'styled-components';
import { typography, TypographyProps } from 'styled-system';
import { TextStyleVariants } from './TextStyleVariants';

export { TextStyleVariants };

type TextBaseProps = {
  tag?:
    | 'p'
    | 'span'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'input'
    | 'li'
    | 'label';
  color?: string;
  variant?:
    | 'title'
    | 'subtitle'
    | 'textBodyRegular'
    | 'textCaptionBold'
    | 'textCaptionSmall'
    | 'titleXS'
    | 'textBodySmall';
  children: React.ReactNode;
} & TypographyProps;

const Text = (
  {
    children,
    variant = 'textBodyRegular',
    color,
    tag,
    ...props
  }: TextBaseProps,
  ref: Ref<any>,
) => (
  <TextBase ref={ref} as={tag} variant={variant} color={color} {...props}>
    {children}
  </TextBase>
);

const TextBase = styled.span<TextBaseProps>`
  ${({ variant }) => variant && TextStyleVariants[variant]};
  ${({ color, theme }) =>
    color &&
    css`
      color: ${theme.colors[color]};
    `};
  ${typography};
`;

export default forwardRef<any, TextBaseProps>(Text);
