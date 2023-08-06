import React from "react"
import { connect } from "react-redux"
function Suplentes({ suplentes, quitarSuplente }) {
  return (
    <section>
      <h2>Suplentes {suplentes.length}</h2>
      <div className="cancha">
        {suplentes.map((suplente) => (
          <article className="suplentes" key={suplente.id}>
            <div>
              <img
                className="player-avatar"
                src={suplente.foto}
                alt={suplente.nombre}
              />
              <button onClick={() => quitarSuplente(suplente)}>X</button>
            </div>
            <p>{suplente.nombre}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
const mapStateToProps = (state) => ({
  suplentes: state.suplentes,
})
const mapDispathToProps = (dispatch) => ({
  quitarSuplente(jugador) {
    dispatch({ type: "QUITAR_SUPLENTE", jugador })
  },
})

export default connect(mapStateToProps, mapDispathToProps)(Suplentes)
