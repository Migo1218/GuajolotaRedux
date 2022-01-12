import React from "react";
import { useNavigate } from "react-router-dom";
import { Divintsearch, Divsearch } from "../styles/template";

const Search = () => {
    const redirectAllproducts = useNavigate()
  return (
    <form>
      <Divsearch>
        <Divintsearch onClick={() => redirectAllproducts('/allproducts')}/>
      </Divsearch>
    </form>
  );
};

export default Search;
