import React from "react";
import styled from "styled-components";

interface Props {
  title?: string;
  img: string;
  max?: number;
  children?: JSX.Element;
}
interface WrapperProps {
  img: string;
  max?: number;
}

const Hero: React.FC<Props> = ({ img, title, max, children }) => {
  return (
    <HeaderWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props: WrapperProps) => (props.max ? "100vh" : "60vh")};
  color: var(--mainWhite);
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${(props: WrapperProps) => props.img}) center / cover no-repeat;

  .title {
    padding-top: 2rem;
    font-size: 3.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
  }
`;

export default Hero;
