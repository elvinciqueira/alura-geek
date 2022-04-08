import { forwardRef, Ref } from 'react';
import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Text } from '../Text';

export type InputProps = {
  tag?: 'input' | 'textarea';
} & InputHTMLAttributes<HTMLInputElement>;

const InputBase = (
  { tag = 'input', ...props }: InputProps,
  ref: Ref<HTMLInputElement | any>,
) => <InputElement as={tag} ref={ref} {...props} />;

const InputElement = styled(Text)`
  background-color: transparent;
  border: 0;
  outline: 0;
`;

export default forwardRef<HTMLInputElement | any, InputProps>(InputBase);
