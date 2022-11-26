import {
  ADD_TO_CART,
  GET_PRODUCTS,
  SET_SINGLE_PRODUCT,
  SET_TOTAL,
  SYNC_STORAGE,
} from "./productAction";

export const getProducts =
  (productData: productItemsType[]) =>
  (dispatch: (arg0: { type: string; payload: productItemsType[] }) => void) => {
    dispatch({ type: GET_PRODUCTS, payload: productData });
  };

export const setSingleProduct = (id: number) => {
  return {
    type: SET_SINGLE_PRODUCT,
    payload: id,
  };
};

export const addToCart =
  (id: number) =>
  (dispatch: (arg0: { type: string; payload?: number }) => void) => {
    console.log({ dispatch, id });
    dispatch({ type: ADD_TO_CART, payload: id });
    dispatch({ type: SET_TOTAL });
    dispatch({ type: SYNC_STORAGE });
  };
