import React, { useContext } from "react";
import Overlay from "../UI/Overlay";
import style from "./Cart.module.css";
import CartContext from "../Context/cart-context";

export default function Cart(props) {
  const cartContext = useContext(CartContext);

  const cartItems = cartContext.items;
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
  return (
    <Overlay toggleCart={props.toggleCart}>
      <ul className={style["cart-items"]}>
        {cartItems &&
          cartItems.map((item, index) => (
            <li key={props.id + `_${Math.random()}`}>{item.name}</li>
          ))}
      </ul>
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.toggleCart}>
          Close
        </button>
        {hasItems && <button className={style.button}>Order</button>}
      </div>
    </Overlay>
  );
}
