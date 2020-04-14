import React from "react";
import PropTypes from 'prop-types';

const Pokemon = (props) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
Pokemon.propTypes = {
  pokeName: PropTypes.string,
  id: PropTypes.number
};

export default Pokemon;
