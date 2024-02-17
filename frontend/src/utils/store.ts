import { create } from "zustand";
import { userDetails, userType } from "./types";

const userDefault: userType = {
  name: "",
  email: "",
  role: "",
};

export const useUserDetails = create<userDetails>((set) => {
  return {
    user: userDefault,
    setUserDetail: (userdata: userType) =>
      set(() => {
        return {
          user: userdata,
        };
      }),
  };
});
