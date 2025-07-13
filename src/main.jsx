import { createRoot } from "react-dom/client";
import "./index.css";
import App from './App'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  // <QueryClientProvider client={queryClient}>
  //   <RouterProvider router={router} />
  // </QueryClientProvider>

  <>
  <App/>
  </>
);
