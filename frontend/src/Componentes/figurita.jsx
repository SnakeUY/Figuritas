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
        <div className="cantidadJugador">{props.tengo}</div>
        <button className="botonTengo">-</button>
        <button className="botonTengo">+</button>
      </div>
    </>
  );
};

export default Figurita;
