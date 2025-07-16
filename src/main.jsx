import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "./index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routing/RouteTree";

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: {
    queryClient,
    store,
  },
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
);
