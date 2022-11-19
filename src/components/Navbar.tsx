import React from "react";
import styled from "styled-components";
import { Badge, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <NavWrapper>
      <div className="nav-center">
        <IconButton>
          <MenuIcon fontSize="medium" />
        </IconButton>
        <img src={logo} alt="tech shop logo" />
        <IconButton aria-label="cart">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon fontSize="medium" />
          </Badge>
        </IconButton>
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
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
