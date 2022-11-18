import pokemonTypeColors from "../../helpers/pokemonTypeColors";
import React from "react";
import "./style.css";

function Card({ pokemon }) {
  return (
    <div class="bg-white shadow-md rounded-lg max-w-sm border-4 border-gray-700 dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img src={pokemon.sprites.front_default} alt="product image" />
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h1 class="text-gray-900 font-semibold text-4xl tracking-tight dark:text-white">
            {pokemon.name}
          </h1>
        </a>
        <div class="grid grid-cols-3">
          {pokemon.types.map((type) => {
            return (
              <div
                className="Card__type"
                style={{ backgroundColor: pokemonTypeColors[type.type.name] }}
              >
                {type.type.name}
              </div>
            );
          })}
        </div>

        <div class="grid grid-cols-3">
          <div className="Card__data">
            <p className="title">Weight</p>
            <p>{pokemon.weight}</p>
          </div>
          <div className="Card__data">
            <p className="title">Height</p>
            <p>{pokemon.height}</p>
          </div>
          <div className="Card__data">
            <p className="title">Ability</p>
            <p className="ability">{pokemon.abilities[0].ability.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
