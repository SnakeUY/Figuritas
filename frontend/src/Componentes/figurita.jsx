import React from "react";
import { httpEditFigurita } from "../services/httpConsumer";

function addLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, "0");
}

const Figurita = ({ props }) => {
  return (
    <>
      <div className="contenedorFigurita" key={props.id}>
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
          <button class="button" onClick={() => restar(props)}>
            -
            <div class="button__horizontal"></div>
            <div class="button__vertical"></div>
          </button>
          </>
          )     }
          <div className="cantidadJugador">{props.tengo}</div>
          <button class="button" onClick={() => sumar(props)}>
            +
            <div class="button__horizontal"></div>
            <div class="button__vertical"></div>
          </button>
          
        </div>


      </div>
    </>
  );
};



const sumar = (props) => {
  props.tengo = parseInt(props.tengo)+1
  httpEditFigurita(props.id,props)
  window.location.reload()
}

const restar = (props) => {
  props.tengo = parseInt(props.tengo)-1
  httpEditFigurita(props.id,props)
  window.location.reload()
}


export default Figurita;
