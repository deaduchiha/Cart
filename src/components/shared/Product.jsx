import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { shortName, isInCart, quantityCount } from "../../helpers/function";

// Context
import { CartContext } from "../../context/CartContextProvider";

// Icon

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      <img src={productData.image} alt="product" style={{ width: "250px" }} />
      <h3>{shortName(productData.title)}</h3>
      <p>{productData.price}$</p>
      <div>
        <Link to={`/product/${productData.id}`}>Details</Link>
        <div>
          {quantityCount(state, productData.id) > 1 && (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </button>
          )}
          {quantityCount(state, productData.id) === 1 && (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <i class="bi bi-trash3-fill"></i>
            </button>
          )}
          {isInCart(state, productData.id) ? (
            <button
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
