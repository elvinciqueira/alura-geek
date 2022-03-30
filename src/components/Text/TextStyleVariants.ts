import { css } from 'styled-components';

const title = css`
  ${({ theme }) => css`
    font-family: ${theme.fonts.fontFamily};
    font-size: ${theme.fontSizes.fontSizeXxl};
    font-weight: ${theme.fontWheights.fontWeightBold};
    line-height: 61px;
  `}
`;

const textBodySmall = css`
  ${({ theme }) => css`
    font-family: ${theme.fonts.fontFamily};
    font-size: ${theme.fontSizes.fontSizeXxs};
    font-weight: ${theme.fontWeights.fontWeightMedium};
    line-height: 16px;
  `}
`;

const textBodyRegular = css`
  ${({ theme }) => css`
    font-family: ${theme.fonts.fontFamily};
    font-size: ${theme.fontSizes.fontSizeXs};
    font-weight: ${theme.fontWeights.fontWeightMedium};
    line-height: 19px;
  `}
`;

const textCaptionSmall = css`
  ${({ theme }) => css`
    font-family: ${theme.fonts.fontFamily};
    font-size: ${theme.fontSizes.fontSizeXxs};
    font-weight: ${theme.fontWeights.fontWeightRegular};
    line-height: 16px;
  `};
`;

const textCaptionBold = css`
  ${({ theme }) => css`
    font-family: ${theme.fonts.fontFamily};
    font-size: ${theme.fontSizes.fontSizeXs};
    font-weight: ${theme.fontWeights.fontWeightBold};
    line-height: 19px;
  `};
`;

const titleXS = css`
  ${({ theme }) => css`
    font-family: ${theme.fonts.fontFamily};
    font-size: ${theme.fontSizes.fontSizeLg};
    font-weight: ${theme.fontWeights.fontWeightBold};
    line-height: 38px;
  `};
`;

const subtitle = css`
  ${({ theme }) => css`
    font-family: ${theme.fonts.fontFamily};
    font-size: ${theme.fontSizes.fontSizeMd};
    font-weight: ${theme.fontWeights.fontWeightBold};
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
  textCaptionSmall,
};
