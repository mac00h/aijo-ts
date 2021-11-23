import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomeVariants from "../MotionVariants/HomeVariants";
import JoinNumberLetter from "../scripts/JoinNumberLetter";
import TransformToRegular from "../scripts/TransformToRegular";
import IsValid from "../scripts/IsValid";
import { StepByStepEl } from "../components/StepByStep";
import TransformToRPN from "../scripts/TransformToRPN";

interface TransformationComponentProps {
  transformType: string;
}

export const TransformationComponent: React.FC<TransformationComponentProps> =
  ({ transformType }) => {
    const [equation, setEquation] = useState("");
    const [joinedEquation, setJoinedEquation] = useState<string[]>();
    const [resultSteps, setResultSteps] = useState<(string | number)[][]>();
    const [resultStepsExplained, setResultStepsExplained] =
      useState<string[]>();
    const [resultReady, setResultReady] = useState<boolean>(false);
    const [notValid, setNotValid] = useState<boolean>(false);
    const [type] = useState<string>(transformType);

    useEffect(() => {
      setJoinedEquation(JoinNumberLetter(Array.from(equation)));
    }, [equation]);

    const handleTransform = () => {
      if (IsValid(joinedEquation!, type)) {
        let resp;
        if (type === "regular") {
          resp = TransformToRPN(joinedEquation!);
        } else {
          resp = TransformToRegular(joinedEquation!);
        }
        setResultSteps(resp.history);
        setResultStepsExplained(resp.stepExplained);
        setResultReady(true);
        setNotValid(false);
      } else setNotValid(true);
    };

    const handleNew = () => {
      setResultReady(false);
      setEquation("");
      setNotValid(false);
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
          className="border py-3 px-6 rounded-full m-10"
          onClick={resultReady ? handleNew : handleTransform}
        >
          {resultReady ? "New expression" : "Transform expression"}
        </motion.button>

        <AnimatePresence>
          {notValid && (
            <motion.h3
              variants={HomeVariants.isValid}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              Your expression is not valid as postfix notation.
            </motion.h3>
          )}
        </AnimatePresence>

        {resultReady && (
          <div className="flex w-full p-5 mt-50 justify-around">
            <div>Step</div>
            <div>Input</div>
            <div>{type === 'regular' ? 'Stack' : 'Priority'}</div>
            <div>{type === 'regular' ? 'Output' : 'Stack'}</div>
          </div>
        )}
        <div className="w-full mb-10">
          {resultReady &&
            resultSteps!.map((e, i) => (
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
