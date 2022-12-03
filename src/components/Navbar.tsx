import React from "react";
import styled from "styled-components";
import { Badge, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../images/logo.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  handleCart,
  handleSidebar,
} from "../store/productReducer/productActionCreators";

const Navbar: React.FC = () => {
  const { cartItems } = useSelector((state: AppState) => state.productReducer);
  type AppDispatch = ThunkDispatch<productStateType, any, AnyAction>;
  const dispatch: AppDispatch = useDispatch();
  return (
    <NavWrapper>
      <div className="nav-center">
        <IconButton onClick={() => dispatch(handleSidebar())}>
          <MenuIcon fontSize="medium" />
        </IconButton>
        <img src={logo} alt="tech shop logo" />
        <IconButton aria-label="cart" onClick={() => dispatch(handleCart())}>
          <Badge badgeContent={cartItems} color="secondary">
            <ShoppingCartIcon fontSize="medium" />
          </Badge>
        </IconButton>
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  box-sizing: border-box;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 1;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    position: absolute;
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;

export default Navbar;
