import { GET_PRODUCTS } from "./productAction";

const initialState: productStateType = {
  sideBarOpen: false,
  cartOpen: false,
  cart: [],
  cartItems: 0,
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
  storeProducts: [],
  filteredProducts: [],
  featuredProducts: [],
  // singleProduct: {},
  loading: false,
  search: "",
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  company: "all",
  shipping: false,
};

const productReducer = (
  state: productStateType = initialState,
  action: productAction
): productStateType => {
  switch (action.type) {
    case GET_PRODUCTS: {
      const featured = action.payload.filter(
        (item: productItemsType) => item.featured === true
      );
      let maxPrice = Math.max(...state.storeProducts.map((item) => item.price));
      let minPrice = Math.min(...state.storeProducts.map((item) => item.price));
      return {
        ...state,
        storeProducts: action.payload,
        featuredProducts: featured,
        filteredProducts: action.payload,
        maxPrice: maxPrice,
        minPrice: minPrice,
        price: maxPrice,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default productReducer;
