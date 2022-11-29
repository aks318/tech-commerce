import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {
  addToCart,
  getStorageProduct,
} from "../../store/productReducer/productActionCreators";
import Hero from "../Hero";
import singleProductImg from "../../images/singleProductBcg.jpeg";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  type AppDispatch = ThunkDispatch<productStateType, any, AnyAction>;
  const dispatch: AppDispatch = useDispatch();

  const { singleProduct, loading } = useSelector(
    (state: AppState) => state.productReducer
  );
  console.log(singleProduct);

  useEffect(() => {
    dispatch(getStorageProduct());
  }, []);
  return (
    <React.Fragment>
      <Hero img={singleProductImg} title="single product" />
      {loading && <h1>product is loading...</h1>}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
              <img
                src={`../${singleProduct.image}`}
                alt="single product"
                className="img-fluid"
              />
            </div>
            <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
              <h5 className="text-title mb-4">model: {singleProduct.title}</h5>
              <h5 className="text-capitalize text-muted mb-4">
                company: {singleProduct.company}
              </h5>
              <h5 className="text-main text-capitalize mb-4">
                price: ${singleProduct.price}
              </h5>
              <p className="text-title mt-3">some info about product:</p>
              <p>{singleProduct.description}</p>
              <button
                className="main-link m-2"
                onClick={() => dispatch(addToCart(singleProduct.id))}
              >
                add to cart
              </button>
              <Link to="/products" className="main-link m-2">
                back to products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SingleProduct;
