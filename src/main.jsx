import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./styles/index.css";
import Root from "./routes/root.jsx";
import Products from "./routes/products.jsx";
import Product from "./components/Product.jsx";
import ProductDetail from "./routes/productdetail.jsx";
import Cart from "./routes/cart.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Payment from "./routes/payment.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route
          path="/products"
          element={<Products />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/products/:id"
          element={<ProductDetail />}
          errorElement={<ErrorPage />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
