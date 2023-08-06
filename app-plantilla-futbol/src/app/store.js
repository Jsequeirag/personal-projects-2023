import { createStore } from "redux"
const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Juan Carlitos",
      foto: "https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/footballer-soccer-aguero-argentina-mancity-512.png",
    },
    {
      id: 2,
      nombre: "Beto Quiroga",
      foto: "https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/footballer-soccer-aguero-argentina-mancity-512.png",
    },
    {
      id: 3,
      nombre: "Alejo Garcia",
      foto: "https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/footballer-soccer-aguero-argentina-mancity-512.png",
    },
    {
      id: 4,
      nombre: "Juan Disain",
      foto: "https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/footballer-soccer-aguero-argentina-mancity-512.png",
    },
    {
      id: 5,
      nombre: "Alvaro Felipe",
      foto: "https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/footballer-soccer-aguero-argentina-mancity-512.png",
    },
    {
      id: 6,
      nombre: "Alexys Lozada",
      foto: "https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/footballer-soccer-aguero-argentina-mancity-512.png",
    },
    {
      id: 7,
      nombre: "Harold Pajuelo",
      foto: "https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/footballer-soccer-aguero-argentina-mancity-512.png",
    },
    {
      id: 8,
      nombre: "Manu Rodriguez",
      foto: "https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/footballer-soccer-aguero-argentina-mancity-512.png",
    },
    {
      id: 9,
      nombre: "AlejoRodríguez",
      foto: "https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/footballer-soccer-aguero-argentina-mancity-512.png",
    },
    {
      id: 10,
      nombre: "Andrés Muquinche",
      foto: "https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/footballer-soccer-aguero-argentina-mancity-512.png",
    },
    {
      id: 11,
      nombre: "Ricardo Otero",
      foto: "https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/footballer-soccer-aguero-argentina-mancity-512.png",
    },
    {
      id: 12,
      nombre: "Deivis Rivera",
      foto: "https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/footballer-soccer-aguero-argentina-mancity-512.png",
    },
    {
      id: 13,
      nombre: "Percy Tuncar",
      foto: "https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/footballer-soccer-aguero-argentina-mancity-512.png",
    },
  ],
  titulares: [],
  suplentes: [],
}
const reducerEntrenador = (state = initialState, action) => {
  switch (action.type) {
    case "AGREGAR_TITULAR":
      return {
        ...state,
        titulares: state.titulares.concat(action.jugador),
        jugadores: state.jugadores.filter(
          (jugador) => jugador.id !== action.jugador.id
        ),
      }
    case "AGREGAR_SUPLENTE":
      return {
        ...state,
        suplentes: state.suplentes.concat(action.jugador),
        jugadores: state.jugadores.filter(
          (jugador) => jugador.id !== action.jugador.id
        ),
      }
    case "QUITAR_TITULAR":
      return {
        ...state,
        titulares: state.titulares.filter(
          (titular) => titular.id !== action.jugador.id
        ),
      }
    case "QUITAR_SUPLENTE":
      return {
        ...state,
        suplentes: state.suplentes.filter(
          (suplente) => suplente.id !== action.jugador.id
        ),
      }
    default:
      break
  }
  return state
}
export default createStore(reducerEntrenador)
