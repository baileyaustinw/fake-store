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
import Products, {
  loader as productsLoader,
  HydrateFallback,
} from "./routes/products.jsx";
import Product from "./components/Product.jsx";
import ProductDetail, {
  loader as productLoader,
  action as productAction,
} from "./routes/productdetail.jsx";
import Cart from "./routes/cart.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<ErrorPage />}
      hydrateFallbackElement={<HydrateFallback />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route
          path="/products"
          element={<Products />}
          loader={productsLoader}
          hydrateFallbackElement={<HydrateFallback />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/products/:id"
          element={<ProductDetail />}
          errorElement={<ErrorPage />}
          loader={productLoader}
          hydrateFallbackElement={<HydrateFallback />}
        />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
