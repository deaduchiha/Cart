import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

// Context
import { ProductsContext } from "../../context/ProductContextProvider";

const Details = () => {
  const id = useParams().id;
  const data = useContext(ProductsContext);
  const product = data[id - 1];
  const { image, title, description, price, category } = product;
  return (
    <div>
      <img width={200} src={image} alt="product" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <span>Category: </span>
          {category}
        </p>
        <div>
          <span>{price}$ </span>
          <Link to="/">back to shop</Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
