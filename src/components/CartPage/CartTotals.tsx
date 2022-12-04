import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { clearCart } from "../../store/productReducer/productActionCreators";

const CartTotals = () => {
  const { cartSubTotal, cartTax, cartTotal } = useSelector(
    (state: AppState) => state.productReducer
  );
  type AppDispatch = ThunkDispatch<productStateType, any, AnyAction>;
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className="col text-title text-center my-4">
          <button
            className="btn btn-outline-danger text-capitalize mb-4"
            onClick={clearCart}
          >
            clear cart
          </button>
          <h3>subtotal: ${cartSubTotal}</h3>
          <h3>tax: ${cartTax}</h3>
          <h3>total: ${cartTotal}</h3>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
