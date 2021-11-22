import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeaderVariants from "../MotionVariants/HeaderVariants";

interface HeaderProps {
  currentLocation: string;
}

export const Header: React.FC<HeaderProps> = ({ currentLocation }) => {
  return (
    <header>
      <motion.div
        variants={HeaderVariants.title}
        initial="hidden"
        animate="visible"
        className="w-11/12 flex justify-between text-2xl border-b mx-auto pt-9 pb-2"
      >
        <div className="p-2">Reverse Polish Notation Transformer</div>
        {currentLocation !== "/" && (
          <div className="flex justify-between w-1/5 p-2">
            <Link to="/">
              <motion.div variants={HeaderVariants.link} whileHover="hover">
                Home
              </motion.div>
            </Link>
            <Link
              to={
                currentLocation === "/regular-to-rpn"
                  ? "/rpn-to-regular"
                  : "regular-to-rpn"
              }
            >
              <motion.div variants={HeaderVariants.link} whileHover="hover">
                {currentLocation !== "/regular-to-rpn"
                  ? "Regular to RPN"
                  : "RPN to Regular"}
              </motion.div>
            </Link>
          </div>
        )}
      </motion.div>
    </header>
  );
};
