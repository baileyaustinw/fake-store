import { useLoaderData } from "react-router-dom";
import { getProduct, updateProductInCart } from "../helpers/products";
import { Form } from "react-router-dom";

export async function loader({ params }) {
  try {
    const id = parseInt(params.id);
    let product = getProduct(id);
    return product;
  } catch (error) {
    throw new Error(error);
  }
}

export async function action({ request, params }) {
  const formData = await request.formData();
  let thisProduct = await getProduct(parseInt(params.id));
  return updateProductInCart(thisProduct.id, formData.get("quantity"));
}

export default function ProductDetail() {
  const product = useLoaderData();

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
          <div className="product-title-container">
            <h1 className="product-title">{product.title}</h1>
            <h2 className="product-price">${product.price}</h2>
          </div>
          <p className="product-description">{product.description}</p>
          <div className="product-input-container">
            <Form method="post">
              <label htmlFor="quantity">Quantity:</label>
              <div className="input-wrapper">
                <input
                  name="quantity"
                  type="number"
                  min="0"
                  max="100"
                  defaultValue={1}
                />
                <input type="submit" value="Add to Cart" />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
