export default function marquesina(texto: string): string[] {
  let buffer: string[] = []
  
  for(let i=1; i<=texto.length; i++){
    buffer.push(texto.slice(i)+texto.slice(0, i))
    console.log(buffer)
  }

  // TODO: implementar
  return buffer;
}
