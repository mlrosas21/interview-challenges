export default function encontrarImpar(numeros: number[]): number {
  let registrados = new Set<number>()

  for(const num of numeros){
    if(registrados.has(num)){
      registrados.delete(num)
    } else {
      registrados.add(num)
    }
  }

  return Array.from(registrados)[0]
}
