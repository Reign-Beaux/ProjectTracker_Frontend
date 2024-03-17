import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { PagePaths, RouteAccessControl } from ".";
import { Dashboard, Login } from "features";

const routes: RouteObject[] = [
  {
    path: PagePaths.LOGIN,
    element: <Login />,
  },
  {
    path: PagePaths.DASHBOARD,
    element: <RouteAccessControl component={<Dashboard />} />
  },
  {
    path: PagePaths.ERROR_PATH,
    element: <Navigate to={PagePaths.LOGIN} />,
  },
];

const router = createBrowserRouter(routes);

export { router };

