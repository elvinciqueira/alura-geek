import React from 'react';
import styled from 'styled-components';
import { InputBase, InputProps } from '../InputBase';
import { TextStyleVariants } from '../Text';

export type InputTextProps = {
  label?: string;
  className?: string;
} & InputProps;

export const InputText = ({
  name,
  label,
  className,
  placeholder,
  ...props
}: InputTextProps) => (
  <Container className={className}>
    <Label htmlFor={name}>{label}</Label>
    <InputTextBase
      name={name}
      aria-label={label || placeholder}
      placeholder={placeholder}
      {...props}
    />
  </Container>
);

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.neutralWhite};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadiusXs};
  border-bottom: 1px solid #c8c8c8;
  margin-top: ${({ theme }) => theme.space.spacingSizeXxxs};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.space.spacingInsetSizeNanoStack};
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.neutralGray500};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fontSizes.fontSizeXxxs};
  font-weight: ${({ theme }) => theme.fontWeights.fontWeightRegular};
  line-height: 16px;
  margin-bottom: ${({ theme }) => theme.space.spacingSizeQuarck};
`;

const InputTextBase = styled(InputBase)`
  ${TextStyleVariants['textBodyRegular']};
  line-height: 20px;
`;
