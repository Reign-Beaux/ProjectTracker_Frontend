import { Dashboard, Login } from "@/features";
import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { AuthGuard } from "./guards";
import { PagePaths } from "./static";

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
    path: PagePaths.ERROR_PATH,
    element: <Navigate to={PagePaths.LOGIN} />,
  },
];

const router = createBrowserRouter(routes);

export { router };

