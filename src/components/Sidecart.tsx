import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import styled from "styled-components";
import { handleCart } from "../store/productReducer/productActionCreators";

interface wrapper {
  show: boolean;
}

const Sidecart = () => {
  const { cartOpen, cart, cartTotal } = useSelector(
    (state: AppState) => state.productReducer
  );
  type AppDispatch = ThunkDispatch<productActionType, any, AnyAction>;
  const dispatch: AppDispatch = useDispatch();
  return (
    <CartWrapper show={cartOpen} onClick={() => dispatch(handleCart())}>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item mb-4">
            <img src={`../${item.image}`} alt="cart item" width="35" />
            <div className="mt-3">
              <h6 className="text-uppercase">{item.title}</h6>
              <h6 className="text-title text-capitalize">
                amount: {item.count}
              </h6>
            </div>
          </li>
        ))}
      </ul>
      <h4 className="text-capitalize text-main">cart total: ${cartTotal}</h4>
      <div className="text-center my-5">
        <Link to="/cart" className="main-link">
          cart page
        </Link>
      </div>
    </CartWrapper>
  );
};

export default Sidecart;

const CartWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-left: 4px solid var(--primaryColor);
  transform: ${(props: wrapper) =>
    props.show ? "translateX(0)" : "translateX(100%)"};
  transition: var(--mainTransition);
  @media (min-width: 576px) {
    width: 20rem;
  }
  overflow: scroll !important;
  padding: 2rem;
  ul {
    padding: 0 !important;
  }
  .cart-item {
    list-style-type: none;
  }
`;
