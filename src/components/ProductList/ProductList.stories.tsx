import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductListItem } from './ProductListItem';

export default {
  title: 'cards/ProductListItem',
  component: ProductListItem,
} as ComponentMeta<typeof ProductListItem>;

const Template: ComponentStory<typeof ProductListItem> = (args) => (
  <ProductListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Produto XYZ',
  price: 'R$ 60,00',
  imageSource: 'images/star-wars.png',
};
