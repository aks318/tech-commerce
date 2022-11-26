import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  center: boolean;
}
interface WrapperProps {
  center: boolean;
}

const Title: React.FC<Props> = ({ title, center }) => {
  return (
    <TitleWrapper className="row" center={center}>
      <div className="col">
        <h2 className="text-title">{title}</h2>
        <div className="title-underline"></div>
      </div>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  text-align: ${(props: WrapperProps) => (props.center ? "center" : "left")};
  .title-underline {
    height: 0.25rem;
    width: 7rem;
    background: var(--primaryColor);
    margin: ${(props: WrapperProps) => (props.center ? "0 auto" : "0")};
  }
`;

export default Title;
