import { linkData } from "../../Data/linkData";
import { socialData } from "../../Data/socialData";
import {
  ADD_TO_CART,
  CART_CLICK,
  DECREMENT,
  FILTER_PRODUCTS,
  GET_PRODUCTS,
  GET_STORAGE_CART,
  GET_STORAGE_PRODUCT,
  REMOVE,
  SET_SINGLE_PRODUCT,
  SET_TOTAL,
  SIDEBAR_CLICK,
  SORT_DATA,
  SYNC_STORAGE,
} from "./productAction";

const initialState: productStateType = {
  sideBarOpen: false,
  cartOpen: false,
  links: linkData,
  socialLinks: socialData,
  cart: [],
  cartItems: 0,
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
  storeProducts: [],
  filteredProducts: [],
  featuredProducts: [],
  singleProduct: {} as productItemsType,
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
  action: productActionType
): productStateType => {
  switch (action.type) {
    case SIDEBAR_CLICK:
      return { ...state, sideBarOpen: !state.sideBarOpen };
    case CART_CLICK:
      return { ...state, cartOpen: !state.cartOpen };
    case GET_PRODUCTS:
      const featured = action.payload.filter(
        (item: productItemsType) => item.featured === true
      );
      let maxPrice = Math.max(
        ...action.payload.map((item: productItemsType) => item.price)
      );
      let minPrice = Math.min(
        ...action.payload.map((item: productItemsType) => item.price)
      );
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
    case SET_SINGLE_PRODUCT:
      let product = state.storeProducts.find(
        (item) => item.id === action.payload
      );
      if (product) {
        localStorage.setItem("singleProduct", JSON.stringify(product));
        return { ...state, singleProduct: product, loading: false };
      }
      return state;
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
    case DECREMENT:
      let filteredCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.count = item.count - 1;
        if (item.count === 0) {
          return { ...state, cart: filteredCart };
        } else {
          item.total = item.count * item.price;
          item.total = parseFloat(item.total.toFixed(2));
        }
        return { ...state, cart: [...filteredCart, item] };
      } else return state;
    case REMOVE:
      const rmCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: rmCart };
    case SYNC_STORAGE:
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return state;
    case GET_STORAGE_CART:
      let cart: string | null;
      cart = localStorage.getItem("cart");
      if (cart) {
        return { ...state, cart: JSON.parse(cart) };
      }
      return state;
    case GET_STORAGE_PRODUCT:
      const single = localStorage.getItem("singleProduct");
      if (single) {
        return { ...state, singleProduct: JSON.parse(single) };
      }
      return state;
    case FILTER_PRODUCTS:
      const { name, type } = action.payload.target;
      const value =
        type === "checkbox"
          ? action.payload.target.checked
          : action.payload.target.value;
      return { ...state, [name]: value };
    case SORT_DATA:
      let sortedProduct = [...state.storeProducts];

      sortedProduct = sortedProduct.filter((item) => item.price <= state.price);
      if (state.company !== "all") {
        sortedProduct = sortedProduct.filter(
          (item) => item.company === state.company
        );
      }
      if (state.shipping) {
        sortedProduct = sortedProduct.filter(
          (item) => item.freeShipping === true
        );
      }
      if (state.search.length > 0) {
        sortedProduct = sortedProduct.filter((item) => {
          const regex = new RegExp(`${state.search}`, "gi");
          return item.title.match(regex) || item.company.match(regex);
        });
      }

      return { ...state, filteredProducts: sortedProduct };
    default:
      return state;
  }
};

export default productReducer;
