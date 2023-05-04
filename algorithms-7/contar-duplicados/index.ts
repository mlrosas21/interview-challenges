export default function contarDuplicados(texto: string): number {
  let contador = new Map
  const arr = texto.split("").map(e => e.toLowerCase())  

  for(let item of arr){
    contador[item] = (contador[item] || 0) + 1
  }   

  const duplicados = Object.entries(contador).reduce((acc, [key, value]) => value >= 2 ? acc+1 : acc, 0
  );

  return duplicados;
}
