import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, PlanAndCoverage, Summary } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/plans",
    element: <PlanAndCoverage />,
  },
  {
    path: "/summary",
    element: <Summary />,
  },
]);

export const AppRouters = () => {
  return <RouterProvider router={router} />;
};
