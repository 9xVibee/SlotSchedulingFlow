import { slotType } from "@/utils/types";
import axios from "axios";
import { useState } from "react";

const useSlotScheduling = () => {
  const [slots, setSlots] = useState<slotType[]>([]);
  const [filteredSlots, setFilteredSlots] = useState<slotType[]>([]);
  const [loading, setLoading] = useState(false);

  //! getting all slots
  const getAllSlots = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3000/api/slots");

      setSlots(res?.data?.slots);
      setFilteredSlots(res?.data?.slots);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //! get all unbooked slots
  const unBookedSlots = async () => {
    const unBookedSlots = slots.filter((slot) => !slot.isAllocated);
    setFilteredSlots(unBookedSlots);
  };

  return { filteredSlots, loading, getAllSlots, unBookedSlots };
};

export default useSlotScheduling;
