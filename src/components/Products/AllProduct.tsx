import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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
import ProductFilter from "./ProductFilter";

const AllProduct = () => {
  const { filteredProducts: products } = useSelector(
    (state: AppState) => state.productReducer
  );
  type AppDispatch = ThunkDispatch<productStateType, any, AnyAction>;
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(productData));
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        <Title center title="our products" />
        <ProductFilter />
        <div className="row">
          <div className="col-10 mx-auto">
            <h6 className="text-title">total products: {products.length}</h6>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row py-5">
          {products.length === 0 && (
            <div className="col text-title text-center">
              sorry, no items matched your search
            </div>
          )}
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onSingle={(id) => dispatch(setSingleProduct(id))}
              onCart={(id) => dispatch(addToCart(id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProduct;
