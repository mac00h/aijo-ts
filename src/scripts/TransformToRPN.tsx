import CheckPriority from "./CheckPriority";
import IsLetter from "./IsLetter";
import IsOperator from "./IsOperator";

const TransformToRPN = (equation) => {
  let isPushed = false;
  let equationArray = equation;
  let output = [];
  let stack = [];
  let resultHistory = [];
  let i = 0;
  let stepExplained = [];

  for (i; i < equationArray.length; i++) {
    let arr = [];
    isPushed = false;
    arr.push(i + 1);
    arr.push(equationArray[i]);

    if (!isNaN(equationArray[i]) || IsLetter(equationArray[i])) {
      output.push(equationArray[i]);
      let el = undefined;
      !isNaN(equationArray[i]) ? (el = "number") : (el = "letter")
      stepExplained.push(`Input is ${el} so we push it to output.`)
    }

    if (IsOperator(equationArray[i])) {
      if (equationArray[i] === "(") {
        stack.unshift(equationArray[i]);
        stepExplained.push("Input is '(' so we push it to stack.")
      }

      if (equationArray[i] === ")") {
        stepExplained.push("Input is ')' so we need to remove all operators from stack to output untill we find '('.")
        for (let k =0; k < stack.length; k++) {
          if (stack[k] === "(") {
            stack.shift();
            break
          } else {
            output.push(stack[k]);
            output.push(' ')
            stack.shift();
            k--;
          }
        }
      }

      if (equationArray[i] !== "(" && equationArray[i] !== ")") {
        let currentItemPriority = CheckPriority(equationArray[i]);
        if (stack.length === 0) {
          stack.unshift(equationArray[i]);
          stepExplained.push('Input is operator and stack is empty so we push operator to stack.')
        } else {
          console.log(stack[0],CheckPriority(stack[0]))
          if(currentItemPriority > CheckPriority(stack[0])){
            stepExplained.push('Input is operator and stack is not empty.\nWe need to check priority of input operator and latest operator on stack.\nCurrent operator has higher priority than latest operator on stack so we push it to stack.');
          }else{
            stepExplained.push('Input is operator and stack is not empty.\nWe need to check priority of input operator and latest operator on stack.\nCurrent operator has lower priority than latest operator on stack so we need to move all operators with higher or equal priority from stack to output.')
          }

          for (let h =0; h < stack.length; h++) {
            let stackPriority = CheckPriority(stack[h]);
            if (!isPushed) {
              if (currentItemPriority > stackPriority) {
                stack.unshift(equationArray[i]);
                isPushed = true;
                break;
              } else {
                output.push(stack[h]);
                output.push(' ')
                stack.shift();
                stack.unshift(equationArray[i]);
                isPushed = true;
              }
            }
          }
        }
      }
    }

    if (stack.length === 0) {
      arr.push("∅");
    } else {
      let v = stack.join("");
      arr.push(v);
    }

    if (output.length === 0) {
      arr.push("∅");
    } else {
      let v = output.join(" ");
      arr.push(v);
    }
    resultHistory.push(arr);
  }

  let arr = [];
  let lastStep = [];
  arr.push(i + 1);
  arr.push("∅");

  if (stack.length === 0) {
    arr.push("∅");
  } else {
    let v = stack.join("");
    arr.push(v);
  }

  if (output.length === 0) {
    arr.push("∅");
  } else {
    let v = output.join(" ");
    arr.push(v);
  }

  let wynik = output.concat(stack)
  console.log(wynik)

  lastStep.push(i + 2);
  lastStep.push("∅");
  lastStep.push("∅");
  lastStep.push(output.join(" ")+stack.join(" "));
  resultHistory.push(arr);
  resultHistory.push(lastStep);
  stepExplained.push('Last step is to take all operators from stack and push them to output.')

  let res = { wynik, resultHistory, stepExplained };
  return res;
};

export default TransformToRPN;