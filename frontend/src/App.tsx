import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import SignUp from "./components/SignUp";
import Home from "./Pages/Home";
import SlotScheduling from "./Pages/SlotScheduling";
import Appointments from "./Pages/Appointments";
import CreateSlot from "./Pages/CreateSlot";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "slot-scheduling",
        element: <SlotScheduling />,
      },
      {
        path: "appointments",
        element: <Appointments />,
      },
      {
        path: "createslot",
        element: <CreateSlot />,
      },
    ],
  },
]);
export default appRouter;
