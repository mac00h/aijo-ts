import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HomeVariants from "../MotionVariants/HomeVariants";
import JoinNumberLetter from "../scripts/JoinNumberLetter";
import IsValid from "../scripts/IsValid";
import TransformToRPN from "../scripts/TransformToRPN";
import { StepByStepEl } from "../components/StepByStep";

export const RegularToRPN: React.FC = () => {
  const [equation, setEquation] = useState("");
  const [joinedEquation, setJoinedEquation] = useState<string[]>();
  const [result, setResult] = useState<string[]>();
  const [resultSteps, setResultSteps] = useState<(string | number)[][]>();
  const [resultStepsExplained, setResultStepsExplained] = useState<string[]>();
  const [resultReady, setResultReady] = useState<boolean>(false);

  useEffect(() => {
    setJoinedEquation(JoinNumberLetter(Array.from(equation)));
  }, [equation]);

  const handleTransform = () => {
    if (IsValid(joinedEquation!, "rpn")) {
      let resp = TransformToRPN(joinedEquation!);
      setResult(resp.wynik);
      setResultSteps(resp.resultHistory);
      setResultStepsExplained(resp.stepExplained);
      setResultReady(true);
    }
  };

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
        onClick={() => handleTransform()}
      >
        Transform Equation
        {/* {inputBlocked ? "New expression" : "Transform Equation"} */}
      </motion.button>

      {resultReady && (
        <div className="flex w-full border-b p-5 mt-20 justify-around">
          <div>Step</div>
          <div>Input</div>
          <div>Stack</div>
          <div>Output</div>
        </div>
      )}
      <div className="w-full">
        {resultReady && resultSteps!.map((e, i) => (
          <div className="overflow-x-hidden">
            <StepByStepEl
              arr={e}
              arrLength={resultSteps!.length}
              indexIdentifier={i}
              key={i}
              explanation={resultStepsExplained![i]}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};
