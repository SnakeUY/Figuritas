import React from "react";
import { getFiguritasByPais } from "../services/httpConsumer";
import Figurita from "./figurita";
import { Figurita as ModeloFigurita } from "../Modelo/figurita";
import { useEffect } from "react";
import { useState } from "react";
const Componente = ({ categorias, figuritas }) => {
  return (
  
    (categorias) ?
      <ul>
        {categorias.map((pais)=> (
          <ul> Pais {'->'} {pais.pais}
          <Pais pais={pais}></Pais>
          </ul>
        ))}
      </ul>:<h1>No hay informacion de categorias</h1>
   );
};

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
      (figurita.pais === pais.pais) ?
      <Figurita props={figurita}/>
      
      :<p>No hay de este pais</p>
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
