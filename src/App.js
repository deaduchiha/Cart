import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

// Components
import Store from "./components/store/Store";
import Details from "./components/details/Details";

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/product" element={<Store />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/" element={<Navigate to="/product" />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;
