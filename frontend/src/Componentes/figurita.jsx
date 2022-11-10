import React from "react";

function addLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, "0");
}

const Figurita = ({ props }) => {
  return (
    <>
      <div className="contenedorFigurita">
        <span className="idJugador">#{addLeadingZeros(props.id, 3)}</span>
        <span className="nombreJugador">{props.nombre}</span>

        <div className="botonera">
          {
          (props.tengo == 0) ?
          <>
          <div className="Nada"></div>
          </>
: (
          <>
          <button class="button">
            -
            <div class="button__horizontal"></div>
            <div class="button__vertical"></div>
          </button>
          </>
          )     }
          <div className="cantidadJugador">{props.tengo}</div>
          <button class="button">
            +
            <div class="button__horizontal"></div>
            <div class="button__vertical"></div>
          </button>
          
        </div>


      </div>
    </>
  );
};

export default Figurita;
