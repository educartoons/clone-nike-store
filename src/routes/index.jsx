import { createBrowserRouter } from "react-router-dom";
import ProductsPage from "../pages/products";
import HomePage from "../pages/home";
import CartPage from "../pages/cart";
import ProductPage from "../pages/product";
import AddProduct from "../pages/add-product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "products",
    element: <ProductsPage />,
  },
  {
    path: "products/:category",
    element: <ProductsPage />,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
  {
    path: "product/:productId",
    element: <ProductPage />,
  },
  {
    path: "admin/add-product",
    element: <AddProduct />,
  },
]);
