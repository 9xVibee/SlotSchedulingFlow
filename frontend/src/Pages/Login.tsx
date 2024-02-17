import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

type userDetails = {
  email: string;
  password: string;
};

const Login = () => {
  const [userDetails, setUserDetails] = useState<userDetails>({
    email: "",
    password: "",
  });

  // handle login
  const handleLogin = () => {
    // checking if email is valid or not
    if (!/^[\w\-\\.]+@([\w-]+\.)+[\w-]{2,}$/.test(userDetails?.email)) {
      toast("Enter valid email!");
      return;
    }
    console.log("hmm");
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
                password: userDetails?.password,
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
                email: userDetails?.email,
                password: e.target.value,
              });
            }}
            value={userDetails?.password}
          />
        </div>
        <Button className="w-[20rem] mt-10" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
