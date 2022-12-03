import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Footer = () => {
  const { socialLinks } = useSelector(
    (state: AppState) => state.productReducer
  );
  return (
    <FooterWrapper>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6">
            <p className="text-capitalize">
              copyright &copy; tech shop {new Date().getFullYear()}. all rights
              reserved
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-around">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.url} target="_blank" rel="noreferrer">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;

export default Footer;
