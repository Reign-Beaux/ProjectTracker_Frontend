import { Login } from "features/login";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import { PagePaths } from ".";

const routes: RouteObject[] = [
  {
    path: PagePaths.LOGIN,
    element: <Login />,
  },
];

const router = createBrowserRouter(routes);

export { router };

