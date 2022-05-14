<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> b5ffc196bdb3cca2d23f400335eec8f8cc8f8e08
import "./search.css";
import { Input } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
<<<<<<< HEAD
=======

const SearchBar = ({ products }) => {
  const [search, setSearch] = useState("");

  //busqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  //filtrado

  let resultado = [];
  if (!search) {
    resultado = products; //hay que borrar product y poner el el arreglo original de los productos
  } else {
    // eslint-disable-next-line no-unused-vars
    resultado = products.filter((description) =>
      description.name.toLowercase().includes(search.toLocaleLowerCase())
    );
  }
>>>>>>> b5ffc196bdb3cca2d23f400335eec8f8cc8f8e08

const searchBar = () => {
  return (
    <div className="input">
<<<<<<< HEAD
      <Input className="buscador" type="text" placeholder="Search" />
=======
      <Input
        className="buscador"
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Search"
      />
>>>>>>> b5ffc196bdb3cca2d23f400335eec8f8cc8f8e08
      <button className="btn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

<<<<<<< HEAD
export default searchBar;
=======
export default SearchBar;
>>>>>>> b5ffc196bdb3cca2d23f400335eec8f8cc8f8e08
