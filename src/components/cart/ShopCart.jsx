import React, { useContext } from "react";

// Components
import Cart from "../shared/Cart";

// Context
import { CartContext } from "../../context/CartContextProvider";
import { Link } from "react-router-dom";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      <div>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div>
          <p>
            <span>Total items: </span>
            {state.itemsCounter}
          </p>
          <p>
            <span>Total payments: </span>
            {state.total}
          </p>
          <div>
            <button onClick={() => dispatch({ type: "CHECKOUT" })}>
              Checkout
            </button>
            <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div>
          <h3>Chechked out succusfully</h3>
          <Link to="/product">Buy more</Link>
        </div>
      )}
      {!state.checkout && state.itemsCounter === 0 && (
        <div>
          <h3>want to buy?</h3>
          <Link to="/product">Go back to shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
