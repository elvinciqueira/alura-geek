import React from 'react';
import styled from 'styled-components';

export const Banner: React.FC = ({ children }) => (
  <ImageBackground>{children}</ImageBackground>
);

const ImageBackground = styled.div`
  background-image: url('/images/banner-image.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 352px;
`;
