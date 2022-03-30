import React from 'react';

import { ProductList } from './ProductList';

const data = [
  {
    id: 1,
    name: 'Mocha',
    price: 'R$ 60,00',
    imageUrl: 'https://source.unsplash.com/tNALoIZhqVM/200x100/',
  },
  {
    id: 2,
    name: 'Latte',
    price: 'R$ 60,00',
    imageUrl: 'https://source.unsplash.com/tNALoIZhqVM/200x100/',
  },
  {
    id: 3,
    name: 'Vanilla Latte',
    price: 'R$ 60,00',
    imageUrl: 'https://source.unsplash.com/tNALoIZhqVM/200x100/',
  },
];

export default {
  title: 'cards/ProductList',
  component: ProductList,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Standard = () => <ProductList data={data} />;
