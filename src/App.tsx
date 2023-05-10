import { FromMLMAccountPage } from "$pages/FromMLMAccount";
import { HomePage } from "$pages/Home";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";

import "./index.postcss";

function CatchAll() {
  const p = useParams();
  return <div>{p.path}</div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to="home" />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "retailStore",
        element: <FromMLMAccountPage />,
      },
      {
        path: ":path*",
        element: <CatchAll />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
