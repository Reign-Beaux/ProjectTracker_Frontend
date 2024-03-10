import { Login } from "features/login";
import { RouteObject, createBrowserRouter } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Login />,
  },
];

const router = createBrowserRouter(routes);

export { router };
