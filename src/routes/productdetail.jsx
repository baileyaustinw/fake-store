import { useParams } from "react-router-dom";
import { ShopContext } from "./root";
import { useContext, useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const { cartItems, products, setCartItem } = useContext(ShopContext);
  const [product, setProduct] = useState();

  useEffect(() => {
    if (!id || !products.length) return;

    const productId = parseInt(id);
    const productInCart = cartItems.find((item) => item.id === productId);
    const tempProduct = products.find((item) => item.id === productId);

    setProduct(productInCart || tempProduct);
  }, [id, cartItems, products]);

  // set state value of product quantity to 0 initially
  const [currentProductQuantity, setCurrentProductQuantity] = useState(0);

  // handle form submit to either update quantity in cart or add new item to cart
  function handleSubmit(formData) {
    const quantity = formData.get("quantity");

    setCartItem(product, quantity);
    setCurrentProductQuantity(quantity);
  }

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-auto w-[75%] mx-auto my-0 py-[2rem] px-[4rem] items-stretch">
        <div className="p-[2rem]">
          <img
            className="max-h-[350px]"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="p-[2rem]">
          <div className="grid grid-template-rows-[auto_1fr] gap-[.5rem] mb-1">
            <h1 className="text-xl">{product.title}</h1>
            <h2 className="text-xl text-green-500">${product.price}</h2>
          </div>
          <p className="font-thin">{product.description}</p>
          <div className="mt-[1rem]">
            <form action={handleSubmit}>
              <label htmlFor="quantity" className="block mb-1 font-thin">
                Quantity:
              </label>
              <div className="grid grid-flow-col grid-cols-[auto_1fr] items-center gap-5">
                <input
                  className="py-2 px-5"
                  name="quantity"
                  type="number"
                  min="0"
                  max="100"
                  defaultValue={currentProductQuantity}
                  id="quantity"
                />
                <input
                  className="py-2 px-5 bg-green-600 text-white hover:bg-green-500 transition duration-300 ease-in-out cursor-pointer"
                  type="submit"
                  value="Add to Cart"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
