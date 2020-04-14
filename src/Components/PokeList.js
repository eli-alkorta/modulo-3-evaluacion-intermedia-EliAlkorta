import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  return (
    <ul className="pokemons-list">
      {props.dataList.map((pokeObject, index) => (
        <li className="pokemon__item" key={index}>
          <Pokemon
            id={pokeObject.id}
            pokeImage={pokeObject.url}
            pokeName={pokeObject.name}
            pokeType={pokeObject.types}
          />
        </li>
      ))}
    </ul>
  );
};

export default PokeList;
