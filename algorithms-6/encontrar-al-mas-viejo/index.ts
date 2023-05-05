import type { Developer } from "./types";

export default function encontrarAlMasViejo(developers: Developer[]): Developer[] {  
  const maxAge = developers.sort((a,b) => b.age - a.age)[0].age  
  
  return developers.filter(developer => developer.age === maxAge);
}
