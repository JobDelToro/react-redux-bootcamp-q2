import React from 'react';

const ProductCard = ({ product }) => {
    return (
        
            <div className="col-md-3 mt-5">
                <div className="card" style={{ width: "15rem" }}>
                    <img 
                        src={product.images[0]} 
                        className="card-img-top img-thumbnail" 
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
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{`Category: ${product.categories[0]}`}</li>
                        <li className="list-group-item">{`$ ${product.price}`}</li>
                    </ul>
                    <div className="card-body">
                        <button type="button" className="btn btn-lg btn-outline-info"> Add to cart</button>
                    </div>
                </div>
            </div>
    );
};

export default ProductCard;
