//import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Index from "./Index";
import Navbar from "../components/Navbar";
import "../styles/App.css";
import { getProductsInCart } from "../helpers/products";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { updateProductInCart } from "../helpers/products";

export const ShopContext = createContext({
  cartItems: [],
  addToCart: () => {},
});

export default function Root() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    let ignore = false;
    // eslint-disable-next-line no-unused-vars
    const products = getProductsInCart().then((result) => {
      if (!ignore) setCartItems(result);
    });

    return () => {
      ignore = true;
    };
  }, []);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <ShopContext.Provider value={{ cartItems, updateProductInCart }}>
        <Navbar />
        <div id="content">{!isHomePage ? <Outlet /> : <Index />}</div>
      </ShopContext.Provider>
    </>
  );
}
