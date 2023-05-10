import { FromMLMAccountPage } from "$pages/FromMLMAccount";
import { HomePage } from "$pages/Home";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "./index.postcss";
import { DashboardLayout } from "$layouts/Dashboard";
import { UnderConstructionPage } from "$pages/UnderConstruction";
import { NewsAndUpdatesPage } from "$pages/NewsAndUpdates";

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
        element: <UnderConstructionPage />,
      },
      {
        path: "my-store",
        element: <UnderConstructionPage />,
      },
      {
        path: "news-and-updates",
        element: <NewsAndUpdatesPage />,
      },
      {
        path: "settings",
        element: <UnderConstructionPage />,
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
