import React from "react";
import Hero from "../Hero";
import productBcg from "../../images/productsBcg.jpeg";
import AllProduct from "./AllProduct";

const Products = () => {
  return (
    <React.Fragment>
      <Hero img={productBcg} />
      <AllProduct />
    </React.Fragment>
  );
};

export default Products;
