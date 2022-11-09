import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getFiguritas, getPaises } from "../services/httpConsumer";
import { Categoria as ModeloCategoria } from "../Modelo/categoria";
import {Componente} from "./categorias";
const Album = ({ props }) => {
  const [categoria, SetCategoria] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const adaptModelToCountry = (pais) => new ModeloCategoria(pais.pais);

  useEffect(() => {
     getPaises(
      (data) => {
        SetCategoria(data.map(adaptModelToCountry));
      },
      () => setIsLoading(false)
    );
  }, []);

  return (
    <>
      <div className="categorias">
        <h2>pais</h2>
      </div>
      {
        isLoading ?
        <p>Cargando</p>
        :(
      <Componente categorias={categoria} figuritas={figurita}/>
      )}
    </>
  );
};

export default Album;
