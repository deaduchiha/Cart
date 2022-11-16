import React, { useContext } from "react";

// Context
import { CartContext } from "../../context/CartContextProvider";

// Function
import { shortName } from "../../helpers/function";

const Cart = (props) => {
  const { dispatch } = useContext(CartContext);
  const { image, title, price, quantity } = props.data;

  return (
    <div>
      <img src={image} alt="product" />
      <div>
        <h3>{shortName(title)}</h3>
        <p>{price}$</p>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      <div>
        {quantity > 1 ? (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
          >
            -
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <i className="bi bi-trash3-fill"></i>
          </button>
        )}
        <button
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
