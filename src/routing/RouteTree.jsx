import { createRootRoute } from "@tanstack/react-router";
import { analyticsRoute, authRoute, dashboardRoute, homeRoute, signupRoute, userLoggedRoute, termsOfServiceRoute, contactRoute, infoPolicyRoute, premiumRoute } from "./route";
import RootLayout from "../RootLayout";

export const rootRoute = createRootRoute({
  component: RootLayout,
});

export const routeTree = rootRoute.addChildren([
  authRoute,
  dashboardRoute,
  homeRoute,
  signupRoute,
  userLoggedRoute,
  analyticsRoute,
  infoPolicyRoute,
  termsOfServiceRoute,
  contactRoute,
  premiumRoute
]);
