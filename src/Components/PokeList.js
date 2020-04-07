import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  return (
    // console.log(dataList)
    <ul className="pokemons-list">
      {props.dataList.map((pokeObject) => (
        <Pokemon
          id={pokeObject.id}
          pokeImage={pokeObject.url}
          pokeName={pokeObject.name}
          pokeType={pokeObject.types}
        />
      ))}
    </ul>
  );
};

export default PokeList;
