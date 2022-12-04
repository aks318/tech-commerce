import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { type } from "os";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  removeItem,
} from "../../store/productReducer/productActionCreators";

interface Props {
  item: cartItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
  type AppDispatch = ThunkDispatch<productStateType, any, AnyAction>;
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={item.image} alt="item" width="60" className="img-fluid" />
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">product: </span>
        {item.title}
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">price: </span>${item.price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <ArrowDropUpIcon
              className="cart-icon text-primary"
              onClick={() => dispatch(increment(item.id))}
            />
            <span className="text-title text-muted mx-3">{item.count}</span>
            <ArrowDropDownIcon
              className="cart-icon text-primary"
              onClick={() => dispatch(decrement(item.id))}
            />
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <DeleteOutlineIcon onClick={() => dispatch(removeItem(item.id))} />
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <strong className="text-muted">item total: {item.count}</strong>
      </div>
    </div>
  );
};

export default CartItem;
