import React, { useState, useEffect } from 'react';
import { rootSlice } from '../../slice';
import CartProducts from '../../components/Cart/CartProducts';
import CartSummary from '../../components/Cart/CartSummary';

const Cart = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const { getOrders } = rootSlice;
    setOrders(getOrders());
  }, []);
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#ff8080" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <CartProducts orders={orders} />
                  <CartSummary orders={orders} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
