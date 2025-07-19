import { createRoute } from "@tanstack/react-router";

import { AnalyticsPage, AuthPage, Dashboard, HomePage } from "../pages";
import { rootRoute } from "./RouteTree";
import checkAuth from "../utils/helper";
import SignupPage from "../pages/SignupPage";

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth",
  component: AuthPage,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/user/dashboard",
  component: Dashboard,
  beforeLoad: checkAuth,
});


const userLoggedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/user',
component: HomePage,
})

const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/signup',
  component: SignupPage,
})


const analyticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/user/analytics',
  component: AnalyticsPage,
  beforeLoad: checkAuth,
})
export { dashboardRoute, homeRoute, authRoute, signupRoute, userLoggedRoute, analyticsRoute };
