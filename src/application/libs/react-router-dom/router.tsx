import { lazy, Suspense } from "react";
import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { AuthGuard } from "./guards";

const Dashboard = lazy(() =>
  import("@/features/dashboard/dashborad").then((module) => ({ default: module.Dashboard }))
);
const Login = lazy(() =>
  import("@/features/login/login").then((module) => ({ default: module.Login }))
);
const Roles = lazy(() =>
  import("@/features/system/roles/roles").then((module) => ({ default: module.Roles }))
);
const Users = lazy(() =>
  import("@/features/system/users/users").then((module) => ({ default: module.Users }))
);

export enum PagePaths {
  DASHBOARD = "/dashboard",
  ERROR_PATH = "*",
  LOGIN = "/login",
  SYSTEM_USERS = "/system/users",
  SYSTEM_ROLES = "/system/roles",
}

const routes: RouteObject[] = [
  {
    path: PagePaths.LOGIN,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: PagePaths.DASHBOARD,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AuthGuard component={<Dashboard />} />
      </Suspense>
    ),
  },
  {
    path: PagePaths.SYSTEM_USERS,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AuthGuard component={<Users />} />
      </Suspense>
    ),
  },
  {
    path: PagePaths.SYSTEM_ROLES,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AuthGuard component={<Roles />} />
      </Suspense>
    ),
  },
  {
    path: PagePaths.ERROR_PATH,
    element: <Navigate to={PagePaths.LOGIN} />,
  },
];

const router = createBrowserRouter(routes);

export { router };
