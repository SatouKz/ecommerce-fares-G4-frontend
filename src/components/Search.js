import React ,{useState} from "react";
import "./search.css";
import { Input } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const searchBar = () =>{ 
const [search , setSearch]= useState ("")
 
//busqueda
const searcher = (e)=>{
  setSearch(e.target.value)
}

  //filtrado

let resultado =[]
if (!search) 
{
 resultado = product  //hay que borrar product y poner el el arreglo original de los productos 
}else {
  resultado = product.filter ((description) =>
   description.name.toLowercase().includes(search.toLocaleLowerCase())
   )
}; 


  return (
    <div className="input">
      <Input className="buscador" 
      value={search}
      onChange={searcher}
      type="text"
      placeholder="Search" />
      <button className="btn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default searchBar ;
