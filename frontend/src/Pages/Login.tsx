import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import axios from "axios";
import { useUserDetails } from "@/utils/store";

type userDetails = {
  email: string;
  password: string;
  role: string;
};

const Login = () => {
  const [userDetails, setUserDetails] = useState<userDetails>({
    email: "",
    password: "",
    role: "",
  });
  const { setUserDetail } = useUserDetails();

  // handle login
  const handleLogin = async () => {
    // checking email and password is empty or not
    if (!userDetails.email || !userDetails.password) {
      toast("Enter email, password!");
      return;
    }
    // checking if email is valid or not
    if (!/^[\w\-\\.]+@([\w-]+\.)+[\w-]{2,}$/.test(userDetails?.email)) {
      toast("Enter valid email!");
      return;
    }

    try {
      const data = await axios.post(
        `http://localhost:3000/api/${userDetails.role}/login`
      );

      console.log(data);
      setUserDetail(data?.data?.user);
    } catch (error) {
      console.log("error i handle login", error);
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
          login.
        </motion.h1>
      </div>
      <div className="w-full h-fit flex flex-col gap-5 items-center justify-center">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-[1rem]">
            Email:
          </label>
          <input
            id="email"
            type="text"
            className="py-1 rounded-sm w-[20rem] border outline-none px-2"
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                email: e.target.value,
              });
            }}
            value={userDetails?.email}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-[1rem]">
            Password:
          </label>
          <input
            id="password"
            type="text"
            className="py-1 px-2 rounded-sm w-[20rem] border outline-none"
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                password: e.target.value,
              });
            }}
            value={userDetails?.password}
          />
        </div>
        <div className="pr-64">
          <RadioGroup
            defaultValue="Patient"
            onSelect={(e) => {
              console.log(e.target);
            }}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="Patient"
                id="option-one"
                onClick={() => {
                  setUserDetails({ ...userDetails, role: "patient" });
                }}
              />
              <Label htmlFor="option-one">Patient</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="Physio"
                id="option-two"
                onClick={() => {
                  setUserDetails({ ...userDetails, role: "physio" });
                }}
              />
              <Label htmlFor="option-thr">Admin</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="Admin"
                id="option-thr"
                onClick={() => {
                  setUserDetails({ ...userDetails, role: "admin" });
                }}
              />
              <Label htmlFor="option-two">Physio</Label>
            </div>
          </RadioGroup>
        </div>

        <Button className="w-[20rem] mt-10" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
