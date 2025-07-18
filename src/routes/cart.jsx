import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "./root";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);
  console.log(cartItems);

  return (
    <>
      <div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <h1 className="self-center">
              You have {cartItems.length} items in your cart
            </h1>
            <Link
              className="py-2 px-5 bg-green-600 text-white hover:bg-green-500 transition duration-300 ease-in-out cursor-pointer ml-auto"
              to="/payment"
            >
              Proceed to Payment
            </Link>
          </div>
          {cartItems.length > 0 ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
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
