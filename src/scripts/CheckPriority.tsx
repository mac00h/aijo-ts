export default function CheckPriority(char: string) {
    let result = null;
    switch (char) {
      case "(":
        result = 0;
        break;

      case ")":
        result = 0;
        break;

      case "+":
        result = 1;
        break;

      case "-":
        result = 1;
        break;

      case "*":
        result = 2;
        break;

      case "/":
        result = 2;
        break;

      case "%":
        result = 2;
        break;

      case "^":
        result = 3;
        break;
    }
    return result;
  }