import { motion } from "framer-motion";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import AvailabelSlot from "@/components/AvailabelSlot";
import Skeletons from "./Skeleton";

const days = [
  {
    value: "tuesday",
    label: "Tuesday",
  },
  {
    value: "monday",
    label: "Monday",
  },
  {
    value: "wednesday",
    label: "Wednesday",
  },
  {
    value: "thursday",
    label: "Thursday",
  },
  {
    value: "friday",
    label: "Friday",
  },
  {
    value: "saturday",
    label: "Saturday",
  },
];

const eveMood = [
  {
    value: "evening",
    label: "Evening",
  },
  {
    value: "morning",
    label: "Morning",
  },
  {
    value: "afternoon",
    label: "Afternoon",
  },
];
const SlotScheduling = () => {
  const [openDay, setOpenDay] = React.useState(false);
  const [openEve, setOpenEve] = React.useState(false);
  const [day, setDay] = React.useState("monday");
  const [eve, setEve] = React.useState("evening");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // hanlding day change
  const handleDayChange = () => {
    console.log("changed");
  };

  // handling eve change
  const handleEveChange = () => {
    console.log("changed eve");
  };
  return (
    <div className="w-full h-fit pl-[4rem] pt-[2.4rem] pr-[2rem] flex flex-col gap-10">
      {/* Heading Section section */}
      <div className="w-full flex justify-between items-center py-2 overflow-y-hidden">
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
          Schedule Your Slot.
        </motion.h1>
        <motion.div
          initial={{
            y: 100,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex gap-4"
        >
          <Popover open={openDay} onOpenChange={setOpenDay}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openDay}
                className="w-[200px] justify-between"
              >
                {day
                  ? days.find((dayss) => dayss.value === day)?.label
                  : "Select Day"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandGroup>
                  {days.map((dayss) => (
                    <CommandItem
                      key={dayss.value}
                      value={dayss.value}
                      onSelect={(currentValue) => {
                        setDay(currentValue === day ? "" : currentValue);
                        setOpenDay(false);
                        handleDayChange();
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          day === dayss.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {dayss.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <Popover open={openEve} onOpenChange={setOpenEve}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openEve}
                className="w-[200px] justify-between"
              >
                {eve
                  ? eveMood.find((eveMoods) => eveMoods.value === eve)?.label
                  : "Select Day"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandGroup>
                  {eveMood.map((eveMoods) => (
                    <CommandItem
                      key={eveMoods.value}
                      value={eveMoods.value}
                      onSelect={(currentValue) => {
                        setEve(currentValue === eve ? "" : currentValue);
                        setOpenEve(false);
                        handleEveChange();
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          eve === eveMoods.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {eveMoods.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </motion.div>
      </div>
      {/* Availabel Slots */}
      <div className="w-full flex flex-col h-fit gap-4 py-2">
        {Array(10)
          .fill("")
          .map((_, idx) => {
            if (loading) return <Skeletons />;
            else
              return (
                <AvailabelSlot
                  role="admin"
                  time="10:00"
                  day="Monday"
                  key={idx}
                />
              );
          })}
      </div>
    </div>
  );
};

export default SlotScheduling;
