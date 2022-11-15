import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Context
import ProductContextProvider from "./context/ProductContextProvider";

// Components
import Store from "./components/store/Store";
import Details from "./components/details/Details";

const App = () => {
  return (
    <ProductContextProvider>
      <Routes>
        <Route path="/product" element={<Store />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/" element={<Navigate to="/product" />} />
      </Routes>
    </ProductContextProvider>
  );
};

export default App;
