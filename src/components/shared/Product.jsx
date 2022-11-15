import React from "react";
import { Link } from "react-router-dom";

import { shortName } from "../../helpers/function";

const Product = ({ productData }) => {
  return (
    <div>
      <img src={productData.image} alt="product" style={{ width: "250px" }} />
      <h3>{shortName(productData.title)}</h3>
      <p>{productData.price}$</p>
      <div>
        <Link to={`/product/${productData.id}`}>Details</Link>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
