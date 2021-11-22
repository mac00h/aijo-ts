import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HomeVariants from "../MotionVariants/HomeVariants";
import JoinNumberLetter from "../scripts/JoinNumberLetter";

export const RegularToRPN: React.FC = () => {
  const [equation, setEquation] = useState("");
  const [joinedEquation, setJoinedEquation] = useState([]);

  useEffect(() => {
    JoinNumberLetter(Array.from(equation))
  }, [equation]);

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
        value={equation}
        onChange={(e) => setEquation(e.target.value)}
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
