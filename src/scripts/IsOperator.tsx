export default function IsOperator(char: string) {
  return /[%^*()+/-\s]/.test(char);
}