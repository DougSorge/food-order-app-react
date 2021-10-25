import React, { useContext } from "react";
import style from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Context/cart-context";

// import Overlay from "../UI/Overlay";
// import Cart from "../Cart/Cart";

export default function HeaderCartButton(props) {
  const cartContext = useContext(CartContext);
  const numberOfCartItems = cartContext.items.reduce((currNumber, item) => {
    return (currNumber += item.amount);
  }, 0);
  return (
    <button type="button" className={style.button} onClick={props.toggleCart}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
}
