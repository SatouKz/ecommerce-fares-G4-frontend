import React from "react";
import "./search.css";
import { Input } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const search = () => {
  return (
    <div className="input">
      <Input className="buscador" placeholder="Search" />
      <button className="btn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default search;
