import React, { useState } from "react";

const CartItem = ({ product, updateOrderQuantity, removeProductOrder }) => {

  const [quantity, setQuantity] = useState(product.quantity);

  const handleOnChange = e => {

    if (e.target.value > 0) {
      setQuantity(e.target.value);
      updateOrderQuantity(product, e.target.value);
    }

    if (e.target.value <= 0) {
      removeProductOrder(product);
    }
  };

  return (
    <div className="row mb-4 d-flex justify-content-between align-items-center">
      <hr className="my-4" />

      <div className="col-md-2 col-lg-2 col-xl-2">
        <img
          src={product.images[0]}
          className="img-fluid rounded-3"
          alt="..."
        />
      </div>
      <div className="col-md-3 col-lg-3 col-xl-3">
        <h6 className="text-muted">{product.name.slice(0, 15) + "..."}</h6>
        <h6 className="text-black mb-0">
          {product.description.slice(0, 20) + "..."}
        </h6>
      </div>
      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
        <input
          id="form1"
          min="0"
          name="quantity"
          defaultValue={quantity}
          type="number"
          className="form-control form-control-sm"
          onChange={handleOnChange}
        />
      </div>
      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h6 className="mb-0">{`$ ${(product.price * product.quantity).toFixed(2)}`}</h6>
      </div>
      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
        <button className="btn btn-danger btn-sm" onClick={() => removeProductOrder(product)}>remove</button>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default CartItem;
