import { Login } from "features/login";
import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { PagePaths } from ".";

const routes: RouteObject[] = [
  {
    path: PagePaths.LOGIN,
    element: <Login />,
  },
  {
    path: PagePaths.ERROR_PATH,
    element: <Navigate to={PagePaths.LOGIN} />,
  },
];

const router = createBrowserRouter(routes);

export { router };

