import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import styled from "styled-components";

interface servicesType {
  id: number;
  icon: JSX.Element;
  title: string;
  text: string;
}
const services: servicesType[] = [
  {
    id: 1,
    icon: <LocalShippingIcon />,
    title: "free shipping",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque!",
  },
  {
    id: 2,
    icon: <AssignmentReturnIcon />,
    title: "30 days return policy",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque!",
  },
  {
    id: 3,
    icon: <CurrencyRupeeIcon />,
    title: "secured payment",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque!",
  },
];
const Services: React.FC = () => {
  return (
    <ServicesWrapper className="py-5">
      <div className="container">
        <div className="row">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
            >
              <div className="service-icon">{service.icon}</div>
              <div className="mt-3 text-capitalize">{service.title}</div>
              <div className="mt-3">{service.text}</div>
            </div>
          ))}
        </div>
      </div>
    </ServicesWrapper>
  );
};

const ServicesWrapper = styled.div`
  background: rgba(95, 183, 234, 0.5);
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
  p {
    color: var(--darkGrey);
  }
`;

export default Services;
