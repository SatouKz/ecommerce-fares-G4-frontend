// import React, { useState } from "react";
// import "./search.css";
// import { Input } from "@chakra-ui/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

// const SearchBar = ({ products }) => {
//   const [search, setSearch] = useState("");

//   //busqueda
//   const searcher = (e) => {
//     setSearch(e.target.value);
//   };

//   //filtrado

//   let resultado = [];
//   if (!search) {
//     resultado = products; //hay que borrar product y poner el el arreglo original de los productos
//   } else {
//     // eslint-disable-next-line no-unused-vars
//     resultado = products.filter((description) =>
//       description.name.toLowercase().includes(search.toLocaleLowerCase())
//     );
//   }

// const searchBar = () => {
//   return (
//     <div className="input">
//       <Input
//         className="buscador"
//         value={search}
//         onChange={searcher}
//         type="text"
//         placeholder="Search"
//       />
//       <button className="btn">
//         <FontAwesomeIcon icon={faSearch} />
//       </button>
//     </div>
//   );
// };

// export default SearchBar;
