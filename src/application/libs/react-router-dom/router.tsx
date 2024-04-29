import { Dashboard, Login, Roles, Users } from "@/features";
import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { PagePaths } from "./static";
import { AuthGuard } from "./guards";

const routes: RouteObject[] = [
  {
    path: PagePaths.LOGIN,
    element: <Login />,
  },
  {
    path: PagePaths.DASHBOARD,
    element: <AuthGuard component={<Dashboard />} />,
  },
  {
    path: PagePaths.SYSTEM_USERS,
    element: <AuthGuard component={<Users />} />,
  },
  {
    path: PagePaths.SYSTEM_ROLES,
    element: <AuthGuard component={<Roles />} />,
  },
  {
    path: PagePaths.ERROR_PATH,
    element: <Navigate to={PagePaths.LOGIN} />,
  },
];

const router = createBrowserRouter(routes);

export { router };
