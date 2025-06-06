import Product from "../components/Product";
import { useLoaderData } from "react-router-dom";
import { getProducts } from "../helpers/products";

export async function loader() {
  try {
    const products = await getProducts();
    return products;
  } catch (error) {
    throw new Error(error);
  }
}

export function HydrateFallback() {
  return (
    <>
      <div className="loading-message">
        <p>loading products</p>
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default function Products() {
  const products = useLoaderData();

  return (
    <>
      <div className="products">
        {products ? (
          products.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                description={product.description}
                price={product.price}
              />
            );
          })
        ) : (
          <div className="empty-products">
            <h1>Shopping cart is empty</h1>
          </div>
        )}
      </div>
    </>
  );
}
