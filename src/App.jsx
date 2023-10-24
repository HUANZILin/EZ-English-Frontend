import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./page/Layout/Root";
import Practice from "./page/Layout/Practice";
import HomePage from "./page/HomePage";
import MemberPage from "./page/MemberPage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import ForgetPassword from "./page/ForgetPassword";
import CardPage from "./page/CardPage";
import DefaultPracticePage from "./page/DefaultPracticePage";
import CollectionPracticePage from "./page/CollectionPracticePage";
import { queryClient } from "./util/http";
import VocabularyListPage from "./page/VocabularyListPage";

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
      {
        path: "register",
        children: [{ index: true, element: <RegisterPage /> }],
      },
      { path: "login", children: [{ index: true, element: <LoginPage /> }] },
      {
        path: "forgetpassword",
        children: [{ index: true, element: <ForgetPassword /> }],
      },
      {
        path: "vocabulary",
        children: [
          { path: "list", element: <VocabularyListPage /> },
          { path: "card", element: <CardPage /> },
          {
            path: "practice",
            element: <Practice />,
            children: [
              { index: true, element: <DefaultPracticePage /> },
              { path: "collection", element: <CollectionPracticePage /> },
            ],
          },
        ],
      },
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
