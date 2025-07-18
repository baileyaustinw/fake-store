import Product from "../components/Product";
import { ShopContext } from "./root";
import { useContext } from "react";

export default function Products() {
  const { products } = useContext(ShopContext);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-stretch">
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
