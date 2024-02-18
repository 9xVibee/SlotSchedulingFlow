import { useUserDetails } from "@/utils/store";
import { slotType } from "@/utils/types";
import axios from "axios";
import { useEffect, useState } from "react";

const useBookUnBookSlots = () => {
  const [slots, setSlots] = useState<slotType[]>([]);
  const [filteredSlots, setFilteredSlots] = useState<slotType[]>([]);

  const [loading, setLoading] = useState(false);
  const { user } = useUserDetails();

  //! getting all slots of physio
  const getAllPhysioSlots = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/physio/getallslots",
        {
          email: user.email || "",
        }
      );

      setLoading(false);
      setSlots(res?.data?.slots);
      setFilteredSlots(res?.data?.slots);
    } catch (error) {
      console.log("Error in getAllPhysioSlots", error);
      setLoading(false);
    }
  };

  //! get all booked slots of physio
  const getBookedSlots = () => {
    const bookedSlots = slots.filter((slot) => slot.isAllocated);
    setFilteredSlots(bookedSlots);
  };

  //! getUnBooked slots of physio
  const getUnBookedSlots = () => {
    const unbookedSlots = slots.filter((slot) => !slot.isAllocated);
    setFilteredSlots(unbookedSlots);
  };

  useEffect(() => {
    getAllPhysioSlots();
  }, []);

  return {
    loading,
    filteredSlots,
    setFilteredSlots,
    getBookedSlots,
    getUnBookedSlots,
  };
};

export default useBookUnBookSlots;
