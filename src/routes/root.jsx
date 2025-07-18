//import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Index from "./index";
import Navbar from "../components/Navbar";
import "../styles/App.css";
import {
  getProducts,
  getProductsInCart,
  setProductsInCart,
} from "../helpers/products";
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

export const ShopContext = createContext({
  cartItems: [],
  products: [],
  setCartItem: () => {},
  removeFromCart: () => {},
});
export const useShop = () => useContext(ShopContext);

export default function ShopProvider() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      if (data) setProducts(data);
    });
  }, []);

  useEffect(() => {
    getProductsInCart().then((data) => {
      if (data) setCartItems(data);
    });
  }, []);

  useEffect(() => {
    setProductsInCart(cartItems);
  }, [cartItems]);

  const setCartItem = (item, quantity) => {
    setCartItems((prev) => {
      // check if item already exists in cart
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        // if it exists. update its quantity
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: parseInt(quantity) } // merge with new quantity
            : i
        ); // leave other items unchanged
      }

      // if it doesn't exist, add the item to cart with quantity
      return [...prev, { ...item, quantity: parseInt(quantity) }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <ShopContext.Provider
        value={{ cartItems, products, setCartItem, removeFromCart }}
      >
        <Navbar />
        <div className="w-[80vw] mx-auto my-0 py-10">
          {!isHomePage ? <Outlet /> : <Index />}
        </div>
      </ShopContext.Provider>
    </>
  );
}
