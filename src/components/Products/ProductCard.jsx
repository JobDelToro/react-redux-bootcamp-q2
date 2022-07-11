import React from 'react';

const ProductCard = ({ product, addOrder }) => {
    return (
        <div className="col-md-4 col-sm-6 col-lg-3 mt-5">
            <div className="card w-auto">
                <img 
                    src={product.images[0]} 
                    className="card-img-top p-1" 
                    alt="..." 
                    style={{
                        width: "fit-content",
                        height: "10rem",
                        alignSelf: "center"
                    }}
                />
                <div className="card-body">
                    <h5 className="card-title">{product.name.slice(0, 15) + '...'}</h5>
                    <p className="card-text">{product.description.slice(0, 20) + '...'}</p>
                </div>
                <ul className="list-group-flush p-">
                    <li className="list-group-item p-1">{`Category: ${product.categories[0]}`}</li>
                    <li className="list-group-item p-1">{`$ ${product.price}`}</li>
                </ul>
                <div className="card-body d-flex justify-content-center">
                    <button type="button" className="btn btn-lg btn-dark" onClick={(e) => addOrder(product)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
