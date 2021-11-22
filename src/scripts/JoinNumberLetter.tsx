import IsOperator from "./IsOperator";

export default function JoinNumberLetter(arr: string[]) {
  let stack: string[] = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!IsOperator(arr[i]) && arr[i + 1] === "(") {
      arr.splice(i + 1, 0, "*");
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (!IsOperator(arr[i])) {
      stack.push(arr[i]);
    } else {
      let x = stack.join("");
      result.push(x.trim());
      stack = [];
      result.push(arr[i]);
    }
  }

  let x = stack.join("");
  result.push(x);
  stack = [];
  console.log(result.filter((x) => x.trim().length > 0))
  return result.filter((x) => x.trim().length > 0);
}
