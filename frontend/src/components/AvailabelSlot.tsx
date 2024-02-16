import { ArrowUpRightFromCircle, BellPlus } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

type AvailabelSlots = {
  time: string;
  day: string;
  role: string;
};

const AvailabelSlot = ({ time, day, role }: AvailabelSlots) => {
  // for opening closing popover
  const handlePopOver = () => {
    console.log("pop over");
  };

  return (
    <div className="w-full flex justify-between items-center border rounded-md p-2">
      <div className="flex flex-col">
        <h1>
          <span className="font-semibold">Time: </span> {time}
        </h1>
        <p>
          <span className="font-semibold">Day: </span>
          {day}
        </p>
        {false && (
          <p>
            <span className="font-semibold">Physio Name: </span>
            Pranshu Verma
          </p>
        )}
      </div>
      {role == "admin" && (
        <Button
          className="flex items-center justify-center gap-2"
          onClick={handlePopOver}
        >
          Book Appointment <BellPlus className="size-5 mt-1" />
        </Button>
      )}
      {role == "physio" && (
        <Link
          to={"/details/id"}
          className="hover:underline transition-all duration-200 text-gray-500 hover:text-black text-[1.2rem] flex items-center gap-1"
        >
          details <ArrowUpRightFromCircle className="size-4 mt-1" />
        </Link>
      )}
    </div>
  );
};

export default AvailabelSlot;
