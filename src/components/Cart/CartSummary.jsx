import React from "react";

const CartSummary = ({ orders, checkout, orderCreated }) => {

    const calculateTotal = orders => {
        let total = 0;
        orders.forEach(product => {
            total += product.price * product.quantity;
        });

        return total.toFixed(2)
    };

  return (
    <div className="col-lg-4 bg-grey">
      <div className="p-5">
        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
        <hr className="my-4" />

        <div className="d-flex justify-content-between mb-4">
          <h5 className="text-uppercase">{`items ${orders.length}`}</h5>
          <h5>{`$ ${calculateTotal(orders)}`}</h5>
        </div>

        <h5 className="text-uppercase mb-3">Shipping</h5>

        <h5 className="text-uppercase mb-3">Give code</h5>

        <div className="mb-5">
          <div className="form-outline">
            <input
              type="text"
              id="form3Examplea2"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="form3Examplea2">
              Enter your code
            </label>
          </div>
        </div>

        <hr className="my-4" />

        <div className="d-flex justify-content-between mb-5">
          <h5 className="text-uppercase">Total price</h5>
          <h5>{`$ ${calculateTotal(orders)}`}</h5>
        </div>

        <button
          type="button"
          className="btn btn-dark btn-block btn-lg"
          data-mdb-ripple-color="dark"
          onClick={() => checkout()}
        >
          Checkout
        </button>
        <br />
        <div className="d-flex justify-content-center">
          <div className="row">
             {
                !orderCreated ?
                  null
                :
                  <h5><span class="badge bg-success">{`${orderCreated.message} with ID: ${orderCreated.order}`}</span></h5>
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
