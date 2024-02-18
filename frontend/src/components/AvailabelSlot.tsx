import { BellPlus } from "lucide-react";
import { Button } from "./ui/button";
// import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

type AvailabelSlots = {
  time: string;
  day: string;
  role: string;
  remark: string;
  physioName: string;
};

const AvailabelSlot = ({
  time,
  day,
  role,
  remark,
  physioName,
}: AvailabelSlots) => {
  const [remarks, setRemarks] = useState("");

  //! allocating the slot
  const handlePopOver = () => {
    toast("Okayy");
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
        {role == "admin" && (
          <p>
            <span className="font-semibold">Physio Name: </span>
            {physioName}
          </p>
        )}
      </div>
      {role == "admin" && (
        <>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="flex items-center justify-center gap-2">
                Allocate Slot <BellPlus className="size-5 mt-1" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Remarks:</AlertDialogTitle>
                <AlertDialogDescription>
                  <Textarea
                    onChange={(e) => setRemarks(e.target.value)}
                    value={remarks}
                  />
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction onClick={handlePopOver}>
                  Submit
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )}
      {role == "physio" && (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <p className="underline text-gray-500 hover:text-black cursor-pointer">
              Remark
            </p>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Remarks:</AlertDialogTitle>
              <AlertDialogDescription>
                <p>{remark}</p>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Close</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
};

export default AvailabelSlot;
