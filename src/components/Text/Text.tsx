import { forwardRef, Ref } from 'react';
import styled, { css } from 'styled-components';
import { TextStyleVariants } from './TextStyleVariants';

type TextBaseProps = {
  tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'input';
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
};

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
`;

export default forwardRef<any, TextBaseProps>(Text);
