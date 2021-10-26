import React, { useReducer } from "react";
import CartContext from "./cart-context";

const deafultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      // when we call the ADD reducer we pass an item into the function. The item contains id, name, price and amount values. First we are checking to see if the item id is already included in the items property contained in our state.
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      // next, if we the findIndex function above returns a value we declare a variable and set it = to the already existing item in the cart by accessing the index of the items array within our state. If existing cart item index isn't found the existing cart item cariable will be null.
      const existingCartItem = state.items[existingCartItemIndex];

      // now that we have confirmed and isolated the existing item we can update its properties to account for duplicates. In our if statement we are spreading the already existing properties into a new object and only updating the amount by adding the existing amount to the payload amount coming in from the cart.
      // Then we are creating a new array in the updatedItems variable. In that array we are updating the existingItemIndex with the updated Item contianing the new amount figure.
      // Now that we have an updated items array containing our updated item we can calculate the total amount based on the updated item data.
      // In the else statement we are simply adding the item to the array because it was confirmed to not be present at time of function call.
      // Lastly we return the items array with the value of updatedItems and the totalAmount as the newly calculated price.
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE":
      let indexOfItemToBeRemoved = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const itemToBeRemoved = state.items[indexOfItemToBeRemoved];
      let newTotalAmount = state.totalAmount - itemToBeRemoved.price;
      if (newTotalAmount < 0) {
        newTotalAmount = 0;
      }
      let updatedItemList;
      if (state.items[indexOfItemToBeRemoved].amount === 1) {
        updatedItemList = state.items.filter(
          (item) => item.id !== action.payload
        );
      } else if (state.items[indexOfItemToBeRemoved].amount > 1) {
        let updatedItem = {
          ...itemToBeRemoved,
          amount: itemToBeRemoved.amount - 1,
        };
        updatedItemList = [...state.items];
        updatedItemList[indexOfItemToBeRemoved] = updatedItem;
      }
      return {
        items: updatedItemList,
        totalAmount: newTotalAmount,
      };

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
