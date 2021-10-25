import React from "react";

// step 1: setup and export your context as a component.
// step 2: set your component = to React.CreateComponent({})
// step 3: add all of the values you need to change or keep track of as key value pairs within the createContext object.
// Note: creating dummy functions as methods within the context helps with autoComplete functionality when we are calling upon our context in other parts of the app.
// See CartProvider.js for next steps.
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
