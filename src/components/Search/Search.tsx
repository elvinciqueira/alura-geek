import React from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../../theme/icons/Search';
import { InputBase, InputWrapper, InputProps } from '../InputBase';
import { TextStyleVariants } from '../Text/TextStyleVariants';

export const Search = ({ name, placeholder, ...props }: InputProps) => (
  <InputWrapperStyled iconTrail={<SearchIcon />}>
    <InputBase
      type="search"
      name={name}
      placeholder={placeholder}
      aria-label={placeholder}
      {...props}
    />
  </InputWrapperStyled>
);

const InputWrapperStyled = styled(InputWrapper)`
  background-color: ${({ theme }) => theme.colors.neutralGray};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadiusLg};
  color: ${({ theme }) => theme.colors.neutralGray500};
  padding: ${({ theme }) =>
    `${theme.spacing.spacingInsetSizeNanoV} ${theme.spacing.spacingInsetSizeXsH}`};

  input {
    ${TextStyleVariants['textCaptionSmall']};
  }
`;
