import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Hero";
import mainBcg from "../../images/mainBcg.jpeg";
import Services from "./Services";
import Featured from "./Featured";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Hero img={mainBcg} title="awesome gadgets">
        <Link to="/products" className="main-link mt-3">
          Our products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </React.Fragment>
  );
};

export default Home;
