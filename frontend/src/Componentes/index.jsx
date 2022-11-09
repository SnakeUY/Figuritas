import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getFiguritas, getPaises } from "../services/httpConsumer";
import { Categoria as ModeloCategoria } from "../Modelo/categoria";
import { Figurita as ModeloFigurita } from "../Modelo/figurita";
import Figurita from "./figurita";
import {Componente} from "./categorias";
const Album = ({ props }) => {
  const [categoria, SetCategoria] = useState([]);
  const [figurita, setFigurita] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const getCategoria = () =>
    getPaises(
      (data) => {
        SetCategoria(data.map(adaptModelToCountry));
      },
      () => console.log("buscando")
    );
  const adaptModelToCountry = (pais) => new ModeloCategoria(pais.pais);
  const adaptModelToFigurita = (figurita) =>
    new ModeloFigurita(
      figurita.id,
      figurita.nombre,
      figurita.pais,
      figurita.tengo
    );

  useEffect(() => {
     getPaises(
      (data) => {
        SetCategoria(data.map(adaptModelToCountry));
      },
      () => setIsLoading(false)
    );

    getFiguritas(
      (data) => {
        setFigurita(data.map(adaptModelToFigurita));
      },
      () => setIsLoading(false)
    );
    /*
    getCategoria();
    categoria.forEach((categoria) => {
      console.log(categoria);
    });
    getFigurita();
    figurita.forEach((figurita) => {
      console.log(figurita);
    });*/ 
  }, []);
  /*
  const getFigurita = () =>
    getFiguritas(
      (data) => {
        setFigurita(data.map(adaptModelToFigurita));
      },
      () => console.log("buscando 2")
    );
*/
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
