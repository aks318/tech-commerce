import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
  const { cart } = useSelector((state: AppState) => state.productReducer);

  if (cart.length === 0) {
    return (
      <h1 className="text-title text-center my-4">
        Your cart is currently empty
      </h1>
    );
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartList;
