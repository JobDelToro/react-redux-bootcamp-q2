import React, { useEffect, useState } from 'react';
import ProductList from '../../components/Products/ProductList';
import { rootSlice } from '../../slice';

export const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const { fetchProducts } = rootSlice;
    fetchProducts()
      .then(data => setProducts(data.data.products.items));
  }, []);
  return (
    !products.length === 0 ?
      null
    :
      <ProductList products={products}/>
  );
};

export default Products;
