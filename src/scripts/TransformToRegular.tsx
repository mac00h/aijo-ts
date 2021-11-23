import CheckPriority from "./CheckPriority";
import IsOperator from "./IsOperator";
import IsLetter from "./IsLetter";
import HasOperator from "./HasOperator";

const TransformToRegular = (equation: string[]) => {
  let equationArray = equation;
  let i = 0;
  let stack = [];
  let history = [];
  let stepExplained = [];

  for (i; i < equationArray.length; i++) {
    let arr = [];
    arr.push(i + 1);
    arr.push(equationArray[i]);

    if (
      !isNaN(Number(equationArray[i])) ||
      IsLetter(equationArray[i])
    ) {
      stack.push(equationArray[i]);
      arr.push("∅");
      let el = undefined;
      !isNaN(Number(equationArray[i])) ? (el = "number") : (el = "letter");
      stepExplained.push(`Input is ${el} so we push it to stack.`);
    }

    if (IsOperator(equationArray[i])) {
      let stackLength: number = stack.length;
      let beforeLast: string = stack[stackLength - 2];
      let last: string = stack[stackLength - 1];
      let toBePushed;

      let beforeLastOperator = HasOperator(beforeLast);

      if (beforeLastOperator.owns === true) {
        let beforeLastPriority = CheckPriority(beforeLastOperator.char);
        let currentOperatorPriority = CheckPriority(equationArray[i]);

        if (beforeLastPriority! < currentOperatorPriority!) {
          if (last.length > 1) {
            toBePushed = `(${beforeLast})${equationArray[i]}(${last})`;
          } else {
            toBePushed = `(${beforeLast})${equationArray[i]}${last}`;
          }
          arr.push("higher");
          stepExplained.push(
            "Input is operator with higher priority than current operator on stack.\nWe combine two latest elements from stack with operator from input.\nBecause of higher priority of input operator we need to add paranthesis."
          );
        } else if (beforeLastPriority === currentOperatorPriority) {
          toBePushed = beforeLast + equationArray[i] + last;
          arr.push("equal");
          stepExplained.push(
            "Input is operator with higher priority than current operator on stack.\nWe combine two latest elements from stack with operator from input.\nPriority is equal so there is no need to add paranthesis."
          );
        } else {
          toBePushed = beforeLast + equationArray[i] + last;
          arr.push("lower");
          stepExplained.push(
            "Input is operator with higher priority than current operator on stack.\nWe combine two latest elements from stack with operator from input.\nPriority is lower so there is no need to add paranthesis."
          );
        }
      } else {
        toBePushed = beforeLast + equationArray[i] + last;
        arr.push("unaffecting");
        stepExplained.push(
          "There is no operator between two latest elements so we combine these two elements from stack with input operator.\nThat's why priority is unnefecting."
        );
      }

      stack.pop();
      stack.pop();
      stack.push(toBePushed);
    }

    if (stack.length === 1) {
      let v = stack.join("");
      arr.push(v);
    }

    if (stack.length > 1) {
      let v = stack.join(", ");
      arr.push(v);
    }
    history.push(arr);
  }

  let result = { stack, history, stepExplained };
  return result;
};

export default TransformToRegular;
