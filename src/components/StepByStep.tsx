import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Waypoint } from "react-waypoint";

interface StepByStepProps {
  indexIdentifier: number;
  arrLength: number;
  explanation: string;
  arr: (string | number)[];
}

export const StepByStepEl: React.FC<StepByStepProps> = ({
  indexIdentifier,
  arrLength,
  explanation,
  arr,
}) => {
  const [toggleAnimation, setToggleAnimation] = useState(false);
  const [lastID, setLastID] = useState("");
  const resultStyle = "border-2 border-dashed w-full p-5 border-pink-500";

  useEffect(() => {
    if (arrLength - 1 === indexIdentifier) {
      setLastID("lastElement" + `${indexIdentifier}` + "3");
    }
  }, [indexIdentifier]);

  const stepByStepContainer = {
    hidden: { x: "200vw" },
    visible: {
      x: 0,
      transition: {
        x: {
          duration: 3,
          ease: "anticipate",
          stiffness: 100,
        },
      },
    },
  };

  return (
    <Waypoint onEnter={() => setToggleAnimation(true)} fireOnRapidScroll={true}>
    <motion.div
      className="text-center mx-5"
      variants={stepByStepContainer}
      initial="hidden"
      animate={toggleAnimation ? "visible" : ""}
    >
      <div className="flex justify-around">
        {arr.map((x, j) => (
          <div
            className={
              lastID === `lastElement${arrLength - 1}${j}`
                ? resultStyle
                : "border w-full p-5"
            }
            key={j}
          >
            {x}
          </div>
        ))}
      </div>
      <div className="w-full mb-10 border border-pink-700 p-5 border-t-0">{explanation}</div>
    </motion.div>
    </Waypoint>
  );
};
