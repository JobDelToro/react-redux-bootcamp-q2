import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProducts } from '../../slice/productsSlice';
import { addOrder } from '../../slice/ordersSlice';

import ProductList from '../../components/Products/ProductList';

const Products = () => {

  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  const handleOnChange = e => {
    setTerm(e.target.value);
  };

  const addProductToOrder = product => {
    dispatch(addOrder(product));
  };

  return (
    <div className="container">
      {
        !products ?
        null
      :
        <div className="row">
          <div className="container col-10 mt-5" role="search">
            <input className="form-control me-2" type="search" placeholder="Search products..." defaultValue={term} onChange={handleOnChange} />
          </div>
        <ProductList products={products} term={term} addOrder={addProductToOrder} />
        </div>
      }
    </div>
  );
};

export default Products;
