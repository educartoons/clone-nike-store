import { createBrowserRouter } from "react-router-dom";
import ProductsPage from "../pages/products";
import HomePage from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
]);
