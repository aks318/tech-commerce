import {
  ADD_TO_CART,
  FILTER_PRODUCTS,
  GET_PRODUCTS,
  GET_STORAGE_CART,
  GET_STORAGE_PRODUCT,
  SET_SINGLE_PRODUCT,
  SET_TOTAL,
  SIDEBAR_CLICK,
  SORT_DATA,
  SYNC_STORAGE,
} from "./productAction";

export const handleSidebar = () => {
  return {
    type: SIDEBAR_CLICK,
  };
};

export const getProducts =
  (productData: productItemsType[]) => (dispatch: ProductDispatchType) => {
    dispatch({ type: GET_PRODUCTS, payload: productData });
    dispatch({ type: GET_STORAGE_CART });
    dispatch({ type: SET_TOTAL });
  };

export const setSingleProduct = (id: number) => {
  return {
    type: SET_SINGLE_PRODUCT,
    payload: id,
  };
};

export const addToCart = (id: number) => (dispatch: ProductDispatchType) => {
  dispatch({ type: ADD_TO_CART, payload: id });
  dispatch({ type: SET_TOTAL });
  dispatch({ type: SYNC_STORAGE });
};

export const getStorageProduct = () => (dispatch: ProductDispatchType) => {
  dispatch({ type: GET_STORAGE_PRODUCT });
};

export const handleChange =
  (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
  (
    dispatch: (args0: {
      type: string;
      payload?: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;
    }) => void
  ) => {
    dispatch({ type: FILTER_PRODUCTS, payload: e });
    dispatch({ type: SORT_DATA });
  };
