import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrders, selectOrderCreated, createOrder, updateOrder, removeOrder } from '../../slice/ordersSlice';
import CartProducts from '../../components/Cart/CartProducts';
import CartSummary from '../../components/Cart/CartSummary';

const Cart = () => {

  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const orderCreated = useSelector(selectOrderCreated);

  const checkout = () => {
    dispatch(createOrder());
  };

  const updateOrderQuantity = (product, quantity) => {
    dispatch(updateOrder({ product, quantity }));
  };

  const removeProductOrder = product => {
    dispatch(removeOrder(product));
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#ff8080" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <CartProducts updateOrderQuantity={updateOrderQuantity} removeProductOrder={removeProductOrder} orders={orders} />
                  <CartSummary orders={orders} orderCreated={orderCreated} checkout={checkout} />
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
