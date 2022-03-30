import { ProductListItem, ProductListItemProps } from './ProductListItem';

type ProdutListProps = {
  data: ProductListItemProps[];
};

export const ProductList = ({ data }: ProdutListProps) => {
  return data.map((item, index) => (
    <ProductListItem
      key={index}
      title={item.title}
      imageSource={item.imageSource}
      price={item.price}
    />
  ));
};
