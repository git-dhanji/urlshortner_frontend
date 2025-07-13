import { createRootRoute } from "@tanstack/react-router";
import { authRoute, dashboardRoute, homeRoute } from "./route";
import RootLayout from "../RootLayout";

export const rootRoute = createRootRoute({
  component: RootLayout,
});

export  const routeTree = rootRoute.addChildren([
  authRoute,
  dashboardRoute,
  homeRoute,
]);
