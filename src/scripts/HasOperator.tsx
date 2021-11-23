export default function HasOperator(element: string) {
    let result = {
      owns: false,
      char: "",
    };
    if (element.includes("+")) result = { owns: true, char: "+" };
    if (element.includes("-")) result = { owns: true, char: "-" };
    if (element.includes("*")) result = { owns: true, char: "*" };
    if (element.includes("/")) result = { owns: true, char: "/" };
    if (element.includes("%")) result = { owns: true, char: "%" };
    if (element.includes("^")) result = { owns: true, char: "^" };
  
    return result;
  }
  