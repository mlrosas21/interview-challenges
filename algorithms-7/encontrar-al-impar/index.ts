export default function encontrarImpar(numeros: number[]): number {
  let registrados = {}
  let result;

  for(let num of numeros){
    if(registrados[num]){
      registrados[num]++
    } else {
      registrados[num] = 1
    }
  }

  console.log(registrados);
  

  for(let num in registrados){    
    if(registrados[num] % 2 !== 0) result = num
  }

  return parseInt(result)
}
