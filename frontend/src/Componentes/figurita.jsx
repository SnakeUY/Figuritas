import React from "react";

const Figurita = ({ props }) => {
  return (
    <>
      <div>Jugador</div>
      <div>id:{props.id}</div>
      <div>nombre:{props.nombre}</div>
      <div>Tengo:{props.tengo}</div>
    </>
  );
};

export default Figurita;
