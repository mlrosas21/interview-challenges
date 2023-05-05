import type { Developer } from "./types";

export default function encontrarLaMedia(developers: Developer[]): number {
  const edadesDevelopers = developers.map(e => e.age)
  const avg = Math.round(edadesDevelopers.reduce((acc, curr) => acc + curr, 0) / edadesDevelopers.length)

  return avg;
}
