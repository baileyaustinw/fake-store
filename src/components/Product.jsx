import { Link } from "react-router-dom";

export default function Product({ id, title, image, description, price }) {
  return (
    <>
      <div className="product-card" key={id}>
        <div className="product-img-container">
          <img className="product-img" src={image} alt={title} />
        </div>
        <h1 className="product-title">{title}</h1>
        <p className="product-desc">{description}</p>
        <div className="product-input">
          <p>${price}</p>
          <Link to={`${id}`}>View Product</Link>
        </div>
      </div>
    </>
  );
}
