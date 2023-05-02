export default function girar(texto: string): string {
  let arr = texto.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) arr[i] = arr[i].split("").reverse().join("");
  }
  texto = arr.join(" ");

  return texto;
}
