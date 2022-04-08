import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../theme/icons/Logo';
import { Text, Box, InputText, TextArea, Button } from '..';

const contacts = [
  'Quem somos nós',
  'Política de privacidade',
  'Programa de fidelidade',
  'Nossas lojas',
  'Quero ser franqueado',
  'Anuncie aqui',
];

export const Footer: React.FC = () => (
  <>
    <Wrapper>
      <Box>
        <Logo />
      </Box>
      <Box>
        <UnorderedList>
          {contacts.map((contact, index) => (
            <Text tag="li" variant="textBodyRegular" key={index}>
              {contact}
            </Text>
          ))}
        </UnorderedList>
      </Box>
      <Box width="560px">
        <form>
          <InputText name="name" label="Nome" placeholder="Digíte seu nome" />
          <TextArea placeholder={'Escreve sua mensagem'} rows={4} cols={50} />
          <Button type="submit" marginTop={'spacingSizeNano'}>
            Escreva sua mensagem
          </Button>
        </form>
      </Box>
    </Wrapper>
    <Box backgroundColor="neutralWhite" padding={'spacingSizeXs'}>
      <Text tag="p" textAlign="center" variant="textBodyRegular">
        Desenvolvido por Elvin Ciqueira <br /> <br /> 2022
      </Text>
    </Box>
  </>
);

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  display: flex;
  justify-content: space-around;
`;

const UnorderedList = styled.ul`
  list-style: none;

  li {
    margin-top: ${({ theme }) => theme.space.spacingSizeXxs};
  }
`;
