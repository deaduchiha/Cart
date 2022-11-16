import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { CartContext } from "../../context/CartContextProvider";

const Navbar = () => {
  const { state } = useContext(CartContext);
  return (
    <div>
      <div>
        <Link to="/product">Products</Link>
      </div>
      <div>
        <Link to="/cart">
          <i className="bi bi-cart"></i>
        </Link>
        <span>{state.itemsCounter}</span>
      </div>
    </div>
  );
};

export default Navbar;
