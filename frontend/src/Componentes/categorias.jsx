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
          <><h2>{pais.pais}</h2>
          <div className="contenedorPais">
              <div className="flex"><Pais pais={pais.pais}></Pais></div>
          </div>
          </>
        ))}
        </>
   );
}

const Pais = ({pais}) => {
  const [figurita, setFigurita] = useState([]);

  useEffect(() => {
    getFiguritasByPais(pais,data => { setFigurita(data.map(adaptModelToFigurita));
      }, () => console.log("Termino de cargar los jugadores")
    );
  }, []);
  
  return(
    <>
      {figurita.map((figurita)=>(
      <Figurita props={figurita}/>
      ))
       }
    </>
  )

};



const adaptModelToFigurita = (figurita) => new ModeloFigurita(
  figurita.id,
  figurita.nombre,
  figurita.pais,
  figurita.tengo
);

export {Componente,Pais};
