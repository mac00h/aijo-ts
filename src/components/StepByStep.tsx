import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface StepByStepProps {
    indexIdentifier: number;
    arrLength: number;
    explanation: string;
    arr: (string | number)[]
}

export const StepByStepEl: React.FC<StepByStepProps> = ({indexIdentifier, arrLength, explanation, arr}) => {
  const [toggleAnimation, setToggleAnimation] = useState(false);
  const [lastID, setLastID] = useState("");

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
    // <Waypoint onEnter={() => setToggleAnimation(true)} fireOnRapidScroll={true}>
      <motion.div
        className="m-1 text-center border-b"
        variants={stepByStepContainer}
        initial="hidden"
        // animate={toggleAnimation ? "visible" : null}
      >
        <div className="flex justify-around p-5">
          {arr.map((x, j) => (
            <div
              className="step single-element"
              key={j}
              id={
                lastID === "lastElement" + `${arrLength - 1}` + `${j}`
                  ? "lastID"
                  : "notLastID"
              }
            >
              <h3>{x}</h3>
            </div>
          ))}
        </div>
        <div className="p-5">{explanation}</div>
      </motion.div>
    // </Waypoint>
  );
};