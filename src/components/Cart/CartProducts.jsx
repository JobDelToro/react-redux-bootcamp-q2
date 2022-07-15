import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const CartProducts = ({ orders, updateOrderQuantity, removeProductOrder }) => {
  const renderCartItems = (orders) => {
    return orders.map((product) => (
      <CartItem key={product.id} product={product} updateOrderQuantity={updateOrderQuantity} removeProductOrder={removeProductOrder} />
    ));
  };

  return (
    <div className="col-lg-8">
      <div className="p-5">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
          <h6 className="mb-0 text-muted">{`${orders.length} products`}</h6>
        </div>
        <h4 className="fw-bold mb-0 text-black">Product details: </h4>
        {orders.length === 0 ? null : renderCartItems(orders)}
        <div className="pt-5">
          <h6 className="mb-0">
            <Link to="/products" className="text-body">
              <i className="fas fa-long-arrow-alt-left me-2"></i>Back to shop
            </Link>
          </h6>
        </div>
      </div>
    </div>
  )
};

export default CartProducts;
