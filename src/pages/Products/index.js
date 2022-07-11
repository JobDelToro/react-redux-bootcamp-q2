import React, { useEffect, useState } from 'react';
import ProductList from '../../components/Products/ProductList';
import { rootSlice } from '../../slice';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const { fetchProducts } = rootSlice;
    fetchProducts()
      .then(data => setProducts(data.data.products.items));
  }, []);

  const addOrder = product => {
    const { addOrder } = rootSlice;
    addOrder(product);
  };

  return (
    !products.length === 0 ?
      null
    :
      <ProductList products={products} addOrder={addOrder} />
  );
};

export default Products;
