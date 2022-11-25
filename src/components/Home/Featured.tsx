import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { productData } from "../../Data/productData";
import { getProducts } from "../../store/productReducer/productActionCreators";

const Featured = () => {
  type AppDispatch = ThunkDispatch<productStateType, any, AnyAction>;

  const { filteredProducts } = useSelector(
    (state: AppState) => state.productReducer
  );
  console.log({ filteredProducts });
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(productData));
  }, []);
  return <div>Featured</div>;
};

export default Featured;
