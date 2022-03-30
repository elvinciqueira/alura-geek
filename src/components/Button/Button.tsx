import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
  isFullWidth?: boolean;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const md = css`
  padding: ${({ theme }) => theme.space.spacingInsetSizeXsStack};
`;

const sm = css`
  padding: ${({ theme }) => `12px ${theme.space.spacingInsetSizeXsH}`};
`;

const ButtonBase = css`
  color: ${({ theme }) => theme.colors.neutralWhite};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border: 0;
  font-size: ${({ theme }) => theme.fontSizes.fontSizeXs};
  line-height: 19px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentPrimaryColor};
  }
`;

const SecondaryButton = css`
  color: ${({ theme }) => theme.colors.primaryColor};
  background-color: ${({ theme }) => theme.colors.neutralWhite};
  border: ${({ theme }) =>
    `${theme.borderWidths.borderWidthHairline} solid ${theme.colors.primaryColor}`}}

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentSecondaryColor};
  }
`;

const fullWidth = css`
  width: 100%;
`;

export const Button = styled.button<ButtonProps>`
  ${ButtonBase}
  ${md}

  ${({ variant }) => variant === 'secondary' && SecondaryButton}
  ${({ size }) => size === 'sm' && sm}
  ${({ isFullWidth }) => isFullWidth && fullWidth}
`;
