import type { Developer } from "./types";

export default function pedirDetalles(developers: Developer[]): Developer[] {
  developers.forEach(developer => {
    for(let prop in developer){
      if(developer[prop] === null){
        developer.question = `Hi, could you please provide your ${prop}.`
      }
    }
  })

  // TODO: implementar
  return developers.filter(dev => dev.question);
}
