import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getPaises } from "../services/httpConsumer";
import { Categoria } from "../Modelo/categoria";

const Album = ({ props }) => {
  const [categoria, SetCategoria] = useState([]);
  const getCategoria = () =>
    getPaises((data) => {
      SetCategoria(data.map(adaptModelToDomain));
    },()=>
    console.log('buscando'));
    const adaptModelToDomain = (pais) => new Categoria(pais.pais)

  useEffect(() => {
    getCategoria();
    categoria.forEach((pais)=>{
        console.log(pais.pais)
    })
  },[]);

  return (
    <div className="categorias">
      <h2>pais</h2>
    </div>
  );
};

export default Album;
