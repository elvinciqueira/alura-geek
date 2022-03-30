import { css } from 'styled-components';

const title = css`
  ${({ theme }) => css`
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSizeXxl};
    font-weight: ${theme.typography.fontWeightBold};
    line-height: 61px;
  `}
`;

const textBodySmall = css`
  ${({ theme }) => css`
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSizeXxs};
    font-weight: ${theme.typography.fontWeightMedium};
    line-height: 16px;
  `}
`;

const textBodyRegular = css`
  ${({ theme }) => css`
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSizeXs};
    font-weight: ${theme.typography.fontWeightMedium};
    line-height: 19px;
  `}
`;

const textCaptionBold = css`
  ${({ theme }) => css`
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSizeXs};
    font-weight: ${theme.typography.fontWeightBold};
    line-height: 19px;
  `};
`;

const titleXS = css`
  ${({ theme }) => css`
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSizeLg};
    font-weight: ${theme.typography.fontWeightBold};
    line-height: 38px;
  `};
`;

const subtitle = css`
  ${({ theme }) => css`
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSizeMd};
    font-weight: ${theme.typography.fontWeightBold};
    line-height: 26px;
  `}
`;

export const TextStyleVariants = {
  title,
  titleXS,
  subtitle,
  textBodySmall,
  textCaptionBold,
  textBodyRegular,
};
