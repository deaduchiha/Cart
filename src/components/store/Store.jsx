import React, { useContext } from "react";

// Context
import { ProductsContext } from "../../context/ProductContextProvider";

// Components
import Product from "../shared/Product";

// Style
import styles from "./Store.module.css";

const Store = () => {
  const products = useContext(ProductsContext);
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
