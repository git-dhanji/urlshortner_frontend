import { createRoute } from "@tanstack/react-router";

import { AuthPage, Dashboard, HomePage } from "../pages";
import { rootRoute } from "./RouteTree";

const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth",
  component: AuthPage,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/user/dashboard",
  component: Dashboard,
});

export { dashboardRoute, homeRoute, authRoute };
