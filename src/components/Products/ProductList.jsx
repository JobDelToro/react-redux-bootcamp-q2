import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addOrder }) => {

    const renderProductsGrid = (products, addOrder) => {
        return products.map(product => (
            <ProductCard key={product.id} product={product} addOrder={addOrder} />
        ));
    };
        
    return (
        <div className="container">
            <div className="row">
            {renderProductsGrid(products, addOrder)}
            </div>
        </div>
    );
};

export default ProductList;
