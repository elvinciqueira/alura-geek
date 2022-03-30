import React from 'react';
import styled from 'styled-components';
import { Flex, Text, Card } from '..';

export type ProductListItemProps = {
  title: string;
  price: string;
  imageSource: string;
};

export const ProductListItem = ({
  title,
  price,
  imageSource = 'https://via.placeholder.com/150',
}: ProductListItemProps) => (
  <Card>
    <Image src={imageSource} alt={`Produto`} />
    <Flex flexDirection={'column'} gridGap={'spacingSizeNano'}>
      <Text variant="textCaptionSmall">{title}</Text>
      <Text variant="textCaptionBold">{price}</Text>
      <Text variant="textCaptionBold" color="primaryColor">
        Ver Produto
      </Text>
    </Flex>
  </Card>
);

const Image = styled.img`
  width: 150px;
  height: 150px;
`;
