import React, { useContext } from "react";
import Overlay from "../UI/Overlay";
import CartItem from "./CartItem";
import style from "./Cart.module.css";
import CartContext from "../Context/cart-context";

export default function Cart(props) {
  const cartContext = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartContext.addItem({
      id: item.id,
      name: item.name,
      amount: 1,
      price: item.price,
    });
  };

  const cartItems = cartContext.items;
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
  return (
    <Overlay toggleCart={props.toggleCart}>
      <ul className={style["cart-items"]}>
        {cartItems &&
          cartItems.map((item, index) => (
            <CartItem
              name={item.name}
              price={item.price}
              amount={item.amount}
              onAdd={cartItemAddHandler.bind(null, item)}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              key={props.id + `_${Math.random()}`}
            />
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
