import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Stat from "./pages/Stat";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "stat", element: <Stat /> },
    ],
  },
]);
