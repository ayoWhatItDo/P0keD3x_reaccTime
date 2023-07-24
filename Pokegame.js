import React from "react";
import Pokedex from "./Pokedex";

function Pokegame(props) {
  let hand1 = [];
  let hand2 = [...props.pokemon];

  while (hand1.length < hand2.length) {
    // take a random pokemon from hand 2, add it to hand 1
    let randIdx = Math.floor(Math.random() * hand2.length);
    let randPokemon = hand2.splice(randIdx, 1)[0];
    hand1.push(randPokemon);
  }

  let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  return (
    <div>
      <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
}

Pokegame.defaultProps = {
  pokemon: [
    { id: 4, name: "Flamable Lizard", type: "fire", base_experience: 62 },
    { id: 7, name: "Moist Turtle", type: "water", base_experience: 63 },
    { id: 11, name: "BetaPod", type: "bug", base_experience: 72 },
    { id: 12, name: "ButterflyButBigger", type: "flying", base_experience: 178 },
    { id: 25, name: "PikachuDaGoat", type: "electric", base_experience: 112 },
    { id: 39, name: "FuzzyPinkThing", type: "normal", base_experience: 95 },
    { id: 94, name: "Ginger", type: "poison", base_experience: 225 },
    { id: 133, name: "Steve", type: "normal", base_experience: 65 }
  ]
};

export default Pokegame;
