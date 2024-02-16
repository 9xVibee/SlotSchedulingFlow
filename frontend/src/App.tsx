import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import SignUp from "./components/SignUp";
import Home from "./Pages/Home";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);
export default appRouter;
