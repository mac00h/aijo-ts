import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HomeVariants from "../MotionVariants/HomeVariants";

export const Home: React.FC = () => {
  return (
    <motion.div
      variants={HomeVariants.containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-5/6 mx-auto h-5/6 flex justify-center items-center flex-col"
    >
      <div className="text-4xl p-10">Welcome!</div>
      <div className="text-3xl">Choose transform type to continue!</div>
      <div className="w-1/3 flex justify-around p-10">
        <Link to="/regular-to-rpn">
          <motion.button
            className="border py-3 px-6 rounded-full"
            variants={HomeVariants.buttonVariants}
            whileHover="hover"
          >
            Regular to RPN
          </motion.button>
        </Link>
        <Link to="/rpn-to-regular">
          <motion.button
            className="border py-3 px-6 rounded-full"
            variants={HomeVariants.buttonVariants}
            whileHover="hover"
          >
            RPN to Regular
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};
