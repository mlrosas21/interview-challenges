import type { Developer } from "./types";

export default function contarLosLenguajes(developers: Developer[]): Record<string, number> {
  let lenguajes = {}

  developers.forEach(developer => {
    lenguajes[developer.language] = lenguajes[developer.language]+1 || 1 
  })

  return lenguajes;
}
