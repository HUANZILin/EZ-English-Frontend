import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./page/Root";
import HomePage from "./page/HomePage";
import MemberPage from "./page/MemberPage";
import { queryClient } from "./util/http";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "member",
        children: [{ index: true, element: <MemberPage /> }],
      },
      { path: "register" },
      { path: "login" },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
