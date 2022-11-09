import React from "react";
import { getFiguritasByPais } from "../services/httpConsumer";
import Figurita from "./figurita";
import { Figurita as ModeloFigurita } from "../Modelo/figurita";
import { useEffect } from "react";
import { useState } from "react";
const Componente = ({categorias}) => {
  return (
        <>
        {categorias.map((pais)=> (
          <ul> Pais {'->'} {pais.pais}
          <Pais pais={pais}></Pais>
          </ul>
        ))}
        </>
   );
}

const Pais = ({pais}) => {
  const [figurita, setFigurita] = useState([]);

  const country = pais.pais
  getFiguritasByPais(country,data => {  
    setFigurita(data.map(adaptModelToFigurita));
    },
    () => console.log("Termino de cargar")
  );

  return(
    (figurita) ?
    <>
    <li>
      <p> Cantidad de jugadores {figurita.length}</p>
      {figurita.map((figurita)=>(
      <Figurita props={figurita}/>
      ))
       }
    </li>
    <li></li>
    <li></li>
    </>
:
    <p>No hay informacion de figuritas</p>
  )

};

const adaptModelToFigurita = (figurita) =>
new ModeloFigurita(
  figurita.id,
  figurita.nombre,
  figurita.pais,
  figurita.tengo
);

export {Componente,Pais};
