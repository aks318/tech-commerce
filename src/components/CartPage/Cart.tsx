import React from "react";
import Title from "../Title";
import CartColumn from "./CartColumn";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="your cart items" center={true} />
        <CartColumn />
        <CartList />
        <CartTotals />
      </div>
    </section>
  );
};

export default Cart;
