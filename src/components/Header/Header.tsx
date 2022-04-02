import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../theme/icons/Logo';
import { Search, Button } from '../';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderWrapperLeft>
          <Logo />
        </HeaderWrapperLeft>
        <HeaderWrapperCenter>
          <Search placeholder="O que deseja encontrar?" />
        </HeaderWrapperCenter>
        <HeaderWrapperRight>
          <Button variant="secondary" isFullWidth>
            Login
          </Button>
        </HeaderWrapperRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;
  max-width: 1136px;
  margin: 0 auto;
`;

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  box-sizing: border-box;
  padding-bottom: ${({ theme }) => theme.space.spacingSizeXs};
  padding-top: ${({ theme }) => theme.space.spacingSizeXs};
`;

const HeaderWrapperLeft = styled.div``;

const HeaderWrapperCenter = styled.div`
  width: 393px;
  margin-left: 32px;
  margin-right: auto;
`;

const HeaderWrapperRight = styled.div`
  width: 182px;
`;
