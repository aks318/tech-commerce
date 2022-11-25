import { GET_PRODUCTS } from "./productAction";

export const getProducts =
  (productData: productItemsType[]) =>
  (dispatch: (arg0: { type: string; payload: productItemsType[] }) => void) => {
    dispatch({ type: GET_PRODUCTS, payload: productData });
  };
