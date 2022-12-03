interface IArticle {
  id: number;
  title: string;
  body: string;
}
type ArticleState = {
  articles: IArticle[];
};
type ArticleAction = {
  type: string;
  article: IArticle;
};
type DispatchType = (args: ArticleAction) => ArticleAction;

// =====Tech-commerce====

interface productItemsType {
  id: number;
  title: string;
  price: number;
  company: string;
  description: string;
  featured: boolean;
  image: string;
  freeShipping: boolean;
}
interface cartItemType extends productItemsType {
  count: number;
  total: number;
}

interface socialDataType {
  id: number;
  icon: JSX.Element;
  url: string;
}

interface productStateType {
  sideBarOpen: boolean;
  cartOpen: boolean;
  socialLinks: socialDataType[];
  cart: cartItemType[];
  cartItems: number;
  cartSubTotal: number;
  cartTax: number;
  cartTotal: number;
  storeProducts: productItemsType[];
  filteredProducts: productItemsType[];
  featuredProducts: productItemsType[];
  singleProduct: productItemsType;
  loading: boolean;
  search: string;
  price: number;
  minPrice: number;
  maxPrice: number;
  company: string;
  shipping: boolean;
}

interface AppState {
  reducer: ArticleState;
  productReducer: productStateType;
}

type productActionType = {
  type: string;
  payload?: any;
};

type ProductDispatchType = (arg0: productActionType) => void;
