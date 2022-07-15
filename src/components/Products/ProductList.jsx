import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, term, addOrder }) => {

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(term));

    const renderProductsGrid = addOrder => {
        return filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} addOrder={addOrder} />
        ));
    };
        
    return (
        <div className="container">
            <div className="row">
            {renderProductsGrid(addOrder)}
            </div>
        </div>
    );
};

export default ProductList;
