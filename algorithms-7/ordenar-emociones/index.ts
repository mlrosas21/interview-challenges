import type { Emocion } from "./types";

const PUNTAJES: Record<Emocion, number> = {
  T_T: 0,
  ":(": 1,
  ":|": 2,
  ":)": 3,
  ":D": 4
}

export default function ordenarEmociones(emociones: Emocion[], orden: boolean): Emocion[] {

  return emociones.sort((a,b) => {
    if(orden){
      return PUNTAJES[b] - PUNTAJES[a]
    } else {
      return PUNTAJES[a] - PUNTAJES[b]
    }
  })
  // TODO: implementar
  return [];
}
