import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import reducer from "./store/articleRedux/reducer";
import productReducer from "./store/productReducer/productReducer";

const rootReducer = combineReducers<AppState>({
  reducer: reducer,
  productReducer: productReducer,
});
const store: Store<AppState, AnyAction> & {
  dispatch: DispatchType;
} = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
