export default function buscarAislado(numeros: number[]): number {
  let impares: number[] = numeros.filter(e => e % 2 !== 0)
  let pares: number[] = numeros.filter(e => e % 2 === 0)

  return impares.length > pares.length ? pares[0] : impares[0]
}
