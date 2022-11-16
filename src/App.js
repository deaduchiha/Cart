import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

// Components
import Store from "./components/store/Store";
import Details from "./components/details/Details";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/cart/ShopCart";

// Style

import "./styles/App.css";
import "./styles/font.css";

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/product" element={<Store />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/" element={<Navigate to="/product" />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;
