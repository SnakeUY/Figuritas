import React from "react";

const Figurita = ({ props }) => {
  return (
    <>
      <div>{props.id}</div>
      <div>{props.nombre}</div>
      <div>{props.tengo}</div>
    </>
  );
};

export default Figurita;
