import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Context/CartProvider";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartProvider>
      {isCartOpen && <Cart toggleCart={toggleCart} />}
      <Header toggleCart={toggleCart} />
      <Meals />
    </CartProvider>
  );
}

export default App;
