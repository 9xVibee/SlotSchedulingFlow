import { BellPlus } from "lucide-react";
import { Button } from "./ui/button";

const AvailabelSlot = () => {
  // for opening closing popover
  const handlePopOver = () => {
    console.log("pop over");
  };

  return (
    <div className="w-full flex justify-between items-center border rounded-md p-2">
      <div className="flex flex-col">
        <h1>
          <span className="font-semibold">Time: </span> 10:00
        </h1>
        <p>
          <span className="font-semibold">Day: </span>
          Monday
        </p>
      </div>
      <Button
        className="flex items-center justify-center gap-2"
        onClick={handlePopOver}
      >
        Book Appointment <BellPlus className="size-5 mt-1" />
      </Button>
    </div>
  );
};

export default AvailabelSlot;
