import type { Estudiante } from "./types";

const getPuntaje = (letra: string) : number =>{
  switch(letra){
    case 'A':
      return 30
    case 'B':
      return 20
    case 'C':
      return 10
    case 'D':
      return 5
    default:
      return 0
  }
}

export default function encontrarHackers(estudiantes: Estudiante[]): string[] {
  let hackers:string[] = []
  
  estudiantes.forEach(estudiante => {
    const [nombre, total, calificaciones] = estudiante
    let sumaCalificaciones = calificaciones.reduce((acc, curr) => acc + getPuntaje(curr), 0)

    if(calificaciones.every(calificacion => ["B", "A"].includes(calificacion))){
      sumaCalificaciones += 20;
    }
    if(total !== sumaCalificaciones) hackers.push(nombre)        
  })  

  // TODO: implementar
  return hackers;
}
