import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "./routes";

import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
