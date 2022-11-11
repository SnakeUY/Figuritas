import React from "react";
import { useState } from "react";
import { httpEditFigurita } from "../services/httpConsumer";
import { getFiguritasById } from '../services/httpConsumer'

function addLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, "0");
}

const Figurita = ({ props }) => {
 const [tengo, setTengo] = useState(parseInt(props.tengo))
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
          <button class="button" onClick={() => restar(props,setTengo)}>
            -
            <div class="button__horizontal"></div>
            <div class="button__vertical"></div>
          </button>
          </>
          )     }
          <div className="cantidadJugador">{tengo}</div>
          <button class="button" onClick={() => {sumar(props,setTengo(),tengo)}}>
            +
            <div class="button__horizontal"></div>
            <div class="button__vertical"></div>
          </button>
          
        </div>


      </div>
    </>
  );
};

const sumar = (props,setTengo,tengo) => {
  props.tengo = parseInt(props.tengo)+1
  httpEditFigurita(props.id,props)
  setTengo(tengo+1)  
}

const restar = ({props,setTengo}) => {
  props.tengo = parseInt(props.tengo)-1
  httpEditFigurita(props.id,props)
  setTengo(props.tengo-1)
}


export default Figurita;
