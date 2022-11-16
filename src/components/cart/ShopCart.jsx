import React, { useContext } from "react";

// Components
import Cart from "../shared/Cart";

// Context
import { CartContext } from "../../context/CartContextProvider";
import { Link } from "react-router-dom";

// Styles
import styles from "./ShopCart.module.css";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div className={styles.payments}>
          <p>
            <span>Total items: </span>
            {state.itemsCounter}
          </p>
          <p>
            <span>Total payments: </span>
            {state.total}
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.clear}
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              Clear
            </button>
            <button
              className={styles.checkout}
              onClick={() => dispatch({ type: "CHECKOUT" })}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div className={styles.complete}>
          <h3>Chechked out succusfully</h3>
          <Link to="/product">Buy more</Link>
        </div>
      )}
      {!state.checkout && state.itemsCounter === 0 && (
        <div className={styles.complete}>
          <h3>want to buy?</h3>
          <Link to="/product">Go back to shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
