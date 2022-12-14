import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import styled from "styled-components";
import { handleSidebar } from "../store/productReducer/productActionCreators";

interface wrapperProps {
  show: boolean;
}
const Sidebar = () => {
  const { links, sideBarOpen } = useSelector(
    (state: AppState) => state.productReducer
  );
  type AppDispatch = ThunkDispatch<productStateType, any, AnyAction>;
  const dispatch: AppDispatch = useDispatch();
  return (
    <SideWrapper show={sideBarOpen}>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.path}
              className="sidebar-link"
              onClick={() => dispatch(handleSidebar())}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </SideWrapper>
  );
};

const SideWrapper = styled.nav`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${(props: wrapperProps) =>
    props.show ? "translateX(0)" : "translateX(-100%)"};
  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    color: var(--mainBlack);
    text-transform: capitalize;
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
`;

export default Sidebar;
