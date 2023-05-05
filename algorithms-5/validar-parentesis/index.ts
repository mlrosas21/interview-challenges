export default function validarParéntesis(parentesis: string): boolean {
  let buffer: string[] = [];
  let arr: string[] = parentesis.split("");
  
  for (let i = 0; i < arr.length; i++) {
    arr[i] === ")" && buffer[buffer.length-1] === "("
      ? buffer.pop()
      : buffer.push(arr[i]);
  }

  return buffer.length === 0 ? true : false;
}
