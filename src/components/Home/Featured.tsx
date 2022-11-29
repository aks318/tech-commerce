import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { productData } from "../../Data/productData";
import {
  addToCart,
  getProducts,
  setSingleProduct,
} from "../../store/productReducer/productActionCreators";
import Product from "../Product";
import Title from "../Title";

const Featured = () => {
  type AppDispatch = ThunkDispatch<productStateType, any, AnyAction>;

  const { featuredProducts } = useSelector(
    (state: AppState) => state.productReducer
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(productData));
  }, []);
  return (
    <section className="py-5">
      <div className="container">
        <Title title="featured products" center />
        <div className="row my-5">
          {featuredProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              onSingle={(id) => dispatch(setSingleProduct(id))}
              onCart={(id) => dispatch(addToCart(id))}
            />
          ))}
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <Link to="/products" className="main-link">
              our products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
