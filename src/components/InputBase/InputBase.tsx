import { forwardRef, Ref } from 'react';
import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Text } from '../Text';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const InputBase = (props: InputProps, ref: Ref<HTMLInputElement | any>) => (
  <StyledInput as={'input'} ref={ref} {...props} />
);

const StyledInput = styled(Text)`
  background-color: transparent;
  border: 0;
`;

export default forwardRef<HTMLInputElement | any, InputProps>(InputBase);
