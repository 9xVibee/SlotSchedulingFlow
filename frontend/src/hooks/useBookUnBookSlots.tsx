import { useUserDetails } from "@/utils/store";
import axios from "axios";
import { useEffect, useState } from "react";

const useBookUnBookSlots = () => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useUserDetails();

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
    } catch (error) {
      console.log("Error in getAllPhysioSlots", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPhysioSlots();
  }, []);

  return { slots, loading };
};

export default useBookUnBookSlots;
