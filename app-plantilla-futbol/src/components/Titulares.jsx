import React from "react"
import { connect } from "react-redux"
import cancha from "../cancha.svg"
function Titulares({ titulares, quitarTitular }) {
  return (
    <section>
      <h2>Titulares {titulares.length}</h2>
      <div className="cancha">
        {titulares.map((titular) => (
          <article className="titular player-avatar" key={titular.id}>
            <div>
              <img
                className="player-avatar"
                src={titular.foto}
                alt={titular.nombre}
              />
              <button onClick={() => quitarTitular(titular)}>X</button>
            </div>
            <p>{titular.nombre}</p>
          </article>
        ))}
        <img src={cancha} alt="cancha" />
      </div>
    </section>
  )
}
const mapStateToProps = (state) => ({
  titulares: state.titulares,
})
const mapDispathToProps = (dispatch) => ({
  quitarTitular(jugador) {
    dispatch({ type: "QUITAR_TITULAR", jugador })
  },
})
export default connect(mapStateToProps, mapDispathToProps)(Titulares)
