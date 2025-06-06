import { useContext } from "react";
import { ShopContext } from "./root";
import { Form } from "react-router-dom";
import Product from "../components/Product";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);
  console.log(cartItems);

  return (
    <>
      <div id="cart">
        <div className="cart-products">
          {cartItems.length > 0 ? (
            cartItems.map((cartItem) => {
              return (
                <div className="product-detail" key={cartItem.id}>
                  <div className="product-img-container">
                    <img
                      className="product-img"
                      src={cartItem.image}
                      alt={cartItem.title}
                    />
                  </div>
                  <div className="product-details-container">
                    <div className="product-title-container">
                      <h1 className="product-title">{cartItem.title}</h1>
                      <h2 className="product-price">${cartItem.price}</h2>
                    </div>
                    <p className="product-description">
                      {cartItem.description}
                    </p>
                    <div className="product-input-container">
                      <Form method="post">
                        <label htmlFor="quantity">Quantity:</label>
                        <div className="input-wrapper">
                          <input
                            name="quantity"
                            type="number"
                            min="0"
                            max="100"
                            defaultValue={cartItem.quantity}
                            id="quantity"
                          />
                          <input type="submit" value="Add to Cart" />
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="empty-cart">
              <h1>Cart empty</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
