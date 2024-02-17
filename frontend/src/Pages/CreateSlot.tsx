import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarDays, PlusCircle } from "lucide-react";
import { toast } from "sonner";

const CreateSlot = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState<Date>();

  // creating new slot for the particular physio
  const handleCreateSlot = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(time, date);
  };

  // checking if date is from same week or not
  const handleDateChange = (e: Date | undefined) => {
    // Get the current date
    const currentDate = new Date();

    // Add 7 days to the current date
    let futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 6);

    if (futureDate.getDate() !== currentDate.getDate() + 6) {
      futureDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      );
    }

    if (
      e !== undefined &&
      e.getDate() > currentDate.getDate() &&
      e.getDate() <= futureDate.getDate()
    ) {
      console.log("yess");
    } else {
      toast("Select date between this week", {
        duration: 1500,
      });
    }
  };

  return (
    <div className="w-full h-full pt-[1rem] flex justify-center items-center flex-col gap-8">
      <div className="w-full flex justify-center items-center py-2 overflow-y-hidden">
        <motion.h1
          initial={{
            y: 100,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="font-bold text-6xl uppercase"
        >
          Create Slot.
        </motion.h1>
      </div>
      <form
        onSubmit={(e) => {
          handleCreateSlot(e);
        }}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-2">
          <label className="text-xl">Select the Date:</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={`
                w-[23.5rem] justify-start text-left font-normal
                ${!date && "text-muted-foreground"}`}
              >
                {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
                <CalendarDays className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(e) => {
                  setDate(e);
                  handleDateChange(e);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl">Select the Time: (24 hours wise)</label>
          <input
            type="time"
            className="text-black w-[23.5rem] rounded-md py-1 outline-none border"
            value={time}
            onChange={(e) => setTime(String(e.target.value))}
          />
        </div>
        <Button type="submit" className="w-[23.5rem] flex items-center gap-2">
          Create Slot <PlusCircle className="size-4 mt-[0.1rem]" />
        </Button>
      </form>
    </div>
  );
};

export default CreateSlot;
