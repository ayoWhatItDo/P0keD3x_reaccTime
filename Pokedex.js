import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

/** Index of Pokemon: show individual cards. */

function Pokedex(props) {
  let winMessage = null;
  if (props.isWinner) {
    winMessage = <p className="Pokedex-winner">THIS HAND WINS! Get riggidy shrekt</p>;
  }

  return (
    <div className="Pokedex">
      <h2 className="Pokedex-title">Pokedex</h2>
      <div className="Pokedex-cards">
        {props.pokemon.map(poke => (
          <Pokecard
            id={poke.id}
            name={poke.name}
            type={poke.type}
            exp={poke.base_experience}
          />
        ))}
      </div>
      <h4>Total experience: {props.exp}</h4>
      {winMessage}
    </div>
  );
}

export default Pokedex;
