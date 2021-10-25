import React, { useReducer } from "react";
import CartContext from "./cart-context";

const deafultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      console.log(action.payload);
      const updatedItems = state.items.concat(action.payload);
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE":
      break;
    default:
      return deafultCartState;
  }
};

// step 4: Create a context provider file and import your context from the context file.
// step 5: Set up your provider as a component that accepts props and export it as wel.
// step 6: from this provider component, return <Context.Provider>{props.children}</Context.Provider>
// step 7: create your functions following the same pattern laid out in the createContext({}) object inside of the context file.
// step 8:  create a helper object that contains all of the context information and pass it as a prop called value to the Context.Provider component in the return statement.
// step 9: determine what components are going to rely on and or use the information from the context Provider.
// step 10: wrap each dependent component in the Context.Provider component.
export default function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    deafultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", payload: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
