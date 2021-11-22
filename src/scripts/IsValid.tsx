import IsOperator from "./IsOperator";

export default function IsValid(e: string[], transformType: string) {
  let valid = true;
  const toBeRemoved = ["(", ")"];
  let expression = e.filter((x) => !toBeRemoved.includes(x));

  if (expression.length > 2) {
    if (
      transformType === "rpn"
        ? !IsOperator(expression[expression.length - 1])
        : IsOperator(expression[expression.length - 1])
    ) {
      let ln = 0,
        op = 0;

      for (let i = 0; i < expression.length; i++) {
        if (IsOperator(expression[i])) op++;
        else ln++;
      }

      if (ln !== op + 1) {
        valid = false;
      }
    } else {
      valid = false;
    }
  }

  return valid;
}
