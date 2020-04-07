import React from "react";

const Pokemon = (props) => {
  return (
    <li className="pokemon__item">
      <div className="pokemon__image-container" id={props.id}>
        <img src={props.pokeImage} alt={props.pokeName} />
      </div>
    <hr></hr>
      <div className="pokemon__name-container">
        <h1>{props.pokeName}</h1>
      </div>
<hr></hr>
      <div className="pokemon__type-container">
        <h4>{props.pokeType}</h4>
      </div>
    </li>
  );
};

export default Pokemon;
