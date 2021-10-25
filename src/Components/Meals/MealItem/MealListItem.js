import React, { useContext } from "react";
import style from "./MealListItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../Context/cart-context";

export default function MealListItem(props) {
  const cartContext = useContext(CartContext);

  const addItemToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  const price = `${props.price.toFixed(2)}`;

  return (
    <li className={style.meal} key={props.id}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={style.description}>{props.description}</div>
        <div className={style.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
}
