import { socialData } from "../../Data/socialData";
import {
  ADD_TO_CART,
  GET_PRODUCTS,
  SET_TOTAL,
  SYNC_STORAGE,
} from "./productAction";

const initialState: productStateType = {
  sideBarOpen: false,
  cartOpen: false,
  socialLinks: socialData,
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
    case GET_PRODUCTS:
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
    case ADD_TO_CART:
      let tempCart = [...state.cart];
      let tempProducts = [...state.storeProducts];
      let checkIndex: number = tempCart.findIndex(
        (item: productItemsType) => item.id === action.payload
      );
      if (checkIndex < 0) {
        let tempItem = tempProducts.find((item) => item.id === action.payload);
        if (tempItem) {
          let total = tempItem.price;
          let cartItem = { ...tempItem, count: 1, total };
          tempCart = [...tempCart, cartItem];
        }
      } else {
        let tempItem = tempCart[checkIndex];
        tempItem.count++;
        tempItem.total = tempItem.price * tempItem.count;
        tempItem.total = parseFloat(tempItem.total.toFixed(2));
      }
      return { ...state, cart: tempCart };
    case SET_TOTAL:
      let subTotal = 0;
      let cartItems = 0;
      state.cart.forEach((item) => {
        subTotal += item.total;
        cartItems += item.count;
      });
      subTotal = parseFloat(subTotal.toFixed(2));
      let tax = subTotal * 0.2;
      tax = parseFloat(tax.toFixed(2));
      let total = subTotal + tax;
      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        cartItems: cartItems,
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    case SYNC_STORAGE:
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return state;
    default:
      return state;
  }
};

export default productReducer;
