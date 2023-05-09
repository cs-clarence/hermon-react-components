import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import App from "./App";
//import "./index.postcss";
function CatchAll() {
  const p = useParams();
  return <div>{p.path}</div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:path*",
    element: <CatchAll />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
