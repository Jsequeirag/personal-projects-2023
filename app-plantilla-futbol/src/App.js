import EquipoSeleccionado from "./components/EquipoSeleccionado"
import Jugadores from "./components/Jugadores"
import "./styles/styles.scss"
function App() {
  return (
    <>
      <header>
        <h1>EDmanager</h1>
      </header>
      <main>
        <Jugadores />
        <EquipoSeleccionado />
      </main>
    </>
  )
}

export default App
