import { FromMLMAccountPage } from "$pages/FromMLMAccount";
import { HomePage } from "$pages/Home";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";

import "./index.postcss";
import { DashboardLayout } from "$layouts/Dashboard";

function CatchAll() {
  const p = useParams();
  return <div>{p.path}</div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
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
        path: "members",
        element: <div>Members</div>,
      },
      {
        path: "my-store",
        element: <div>My Store</div>,
      },
      {
        path: "news-and-updates",
        element: <div>News and Updates</div>,
      },
      {
        path: "settings",
        element: <div>Settings</div>,
      },
    ],
  },
  {
    path: "/retailStore",
    element: <FromMLMAccountPage />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
