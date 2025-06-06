import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../routes/root";

export default function Navbar() {
  const { cartItems } = useContext(ShopContext);
  console.log(cartItems);

  let numProducts;
  if (!cartItems) {
    numProducts = 0;
  } else {
    numProducts = cartItems.length;
  }

  return (
    <>
      <nav id="navbar">
        <div className="logo">
          <Link to="/">FakeStore</Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-cart4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                </svg>
                <span className="cart-count">{numProducts}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
