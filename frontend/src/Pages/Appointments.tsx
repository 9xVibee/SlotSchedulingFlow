import AvailabelSlot from "@/components/AvailabelSlot";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Appointments = () => {
  const navigate = useNavigate();

  const getBookedSlots = () => {};
  const getNonBookedSlots = () => {};

  const redirectThePhysio = () => {
    const curDate = new Date();

    if (curDate.getDay() == 6) navigate("/createslot");
    else
      toast("Slot can only be create on sunday", {
        position: "top-center",
      });
  };
  return (
    <div className="w-full h-screen pt-[3rem] flex flex-col gap-8">
      <div className="flex flex-col gap-2">
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
            Appointments.
          </motion.h1>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex gap-2">
            <Button onClick={getBookedSlots}>Booked</Button>
            <Button onClick={getNonBookedSlots}>Not-Booked</Button>
          </div>
          {<Button onClick={redirectThePhysio}>Slot Availability</Button>}
        </div>
      </div>

      {/* availabel slots */}
      <div className="hideScrollBar w-full flex flex-col h-3/4 overflow-y-scroll gap-4 py-2">
        {Array(10)
          .fill("")
          .map((_, idx) => {
            // if (loading) return <Skeletons />;
            return (
              <AvailabelSlot
                time="10:00"
                day="Monday"
                key={idx}
                role={"physio"}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Appointments;
