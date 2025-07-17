import { createRoute } from "@tanstack/react-router";

import { AuthPage, Dashboard, HomePage } from "../pages";
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
const SignupRoute =createRoute({
  getParentRoute:()=>rootRoute,
  path:'/signup',
  component:SignupPage,
})
export { dashboardRoute, homeRoute, authRoute,SignupRoute };
