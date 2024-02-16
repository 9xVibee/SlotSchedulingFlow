import { ModeToggle } from "@/components/mode-toggle";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <div className="absolute top-3 right-3">
        <ModeToggle />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
