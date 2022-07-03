import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {

    const renderProductsGrid = (products) => {
        return products.map(product => (
            <ProductCard key={product.id} product={product} />
        ));
    };
        
    return (
        <div className="container">
            <div className="row">
            {renderProductsGrid(products)}
            </div>
        </div>
    );
};

export default ProductList;
