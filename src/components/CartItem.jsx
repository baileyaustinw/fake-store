import { ShopContext } from "../routes/root";
import { useContext } from "react";

export default function CartItem({ cartItem }) {
  const { setCartItem, removeFromCart } = useContext(ShopContext);

  // update or delete cart item in localstorage on form submit
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const quantity = formData.get("quantity");
    const action = e.nativeEvent.submitter.value;

    if (action == "update") {
      setCartItem(cartItem, quantity);
    } else {
      removeFromCart(cartItem.id);
    }
  }

  return (
    <div
      className="grid grid-cols-[1fr_3fr] gap-20 my-0 mx-auto rounded-2xl rounded-2xl border-2 shadow-sm/20 border-zinc-100 p-5"
      key={cartItem.id}
    >
      <div className="self-center mx-auto">
        <img
          className="max-w-[100%] max-h-[200px]"
          src={cartItem.image}
          alt={cartItem.title}
        />
      </div>
      <div className="">
        <div className="mb-5">
          <h1 className="font-black">{cartItem.title}</h1>
          <h2 className="text-green-500">${cartItem.price}</h2>
        </div>
        <p className="font-thin mb-5">{cartItem.description}</p>
        <div className="grid grid-flow-col grid-cols-[auto_1fr] items-center gap-5">
          <form onSubmit={handleSubmit}>
            <label htmlFor="quantity">Quantity:</label>
            <div className="grid grid-flow-col items-center gap-5">
              <input
                className="py-2 px-5"
                id="quantity"
                name="quantity"
                type="number"
                min="0"
                max="100"
                defaultValue={cartItem.quantity}
              />
              <button
                type="submit"
                name="action"
                value="update"
                className="py-2 px-5 bg-green-600 text-white hover:bg-green-500 transition duration-300 ease-in-out cursor-pointer"
              >
                Update Quanity
              </button>
              <button
                className="py-2 px-5 bg-red-600 text-white hover:bg-red-500 transition duration-300 ease-in-out cursor-pointer"
                type="submit"
                name="action"
                value="remove"
              >
                Remove Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
