import React from "react";
import { motion } from "framer-motion";
import HomeVariants from "../MotionVariants/HomeVariants";

export const RPNToRegular: React.FC = () => {
  return (
    <motion.div
      variants={HomeVariants.containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-5/6 mx-auto h-5/6 flex flex-col items-center"
    >
      <div className="text-2xl p-10">
        Transform regular expression to postfix notation.
      </div>
      <input
        placeholder="Provide expression"
        className="bg-transparent border py-3 px-6 rounded-full text-center text-white outline-none"
      />
      <motion.button
        variants={HomeVariants.buttonVariants}
        whileHover="hover"
        className="border py-3 px-6 rounded-full mt-10"
      >
        Transform Equation
        {/* {inputBlocked ? "New expression" : "Transform Equation"} */}
      </motion.button>
    </motion.div>
  );
};
