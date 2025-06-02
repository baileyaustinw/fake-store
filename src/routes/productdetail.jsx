import { useLoaderData } from "react-router-dom";
import { getProduct } from "../helpers/products";

export async function loader(request) {
  try {
    const id = parseInt(request.params.id);
    let product = getProduct(id);
    return product;
  } catch (error) {
    throw new Error(error);
  }
}

export default function ProductDetail() {
  const product = useLoaderData();

  // create detail page
  return (
    <>
      <div className="product-detail">
        <div className="product-img-container">
          <img
            className="product-img"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="product-details-container">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
        </div>
      </div>
    </>
  );
}
