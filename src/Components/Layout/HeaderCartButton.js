import React, { useContext, useEffect, useState } from "react";
import style from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Context/cart-context";

// import Overlay from "../UI/Overlay";
// import Cart from "../Cart/Cart";

export default function HeaderCartButton(props) {
  const [playBump, setPlayBump] = useState(false);
  const cartContext = useContext(CartContext);
  const numberOfCartItems = cartContext.items.reduce((currNumber, item) => {
    return (currNumber += item.amount);
  }, 0);

  useEffect(() => {
    if (numberOfCartItems === 0) {
      return;
    }
    setPlayBump(true);
    const timer = setTimeout(() => {
      setPlayBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [numberOfCartItems]);

  const btnClasses = `${style.button} ${playBump ? style.bump : ""}`;

  return (
    <button type="button" className={btnClasses} onClick={props.toggleCart}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
}
