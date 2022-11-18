// import pokemonTypeColors from "../../helpers/pokemonTypeColors";
import React from "react";
import "./style.css";

function CardType({ type }) {
  return (
    <div class="bg-white shadow-md rounded-lg max-w-sm border-4 border-gray-700 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-5 pb-5">
        <h3 class="text-lg font-bold">
          Nama :{" "}
          <h1 class="text-gray-900 font-semibold tracking-tight ml-4 dark:text-white">
            {type.name}
          </h1>
        </h3>
        <h3 lass="text-lg font-bold">Dalam bahasa :</h3>
        <div class="grid grid-cols-3">
          {type.names.map((tipe) => {
            return <div className="Card__type">{tipe.language.name}</div>;
          })}
        </div>

        <div class="grid grid-cols-3">
          {/* <div className="Card__data">
            <p className="title">Weight</p>
            <p>{type.weight}</p>
          </div>
          <div className="Card__data">
            <p className="title">Height</p>
            <p>{type.height}</p>
          </div>
          <div className="Card__data">
            <p className="title">Ability</p>
            <p className="ability">{type.abilities[0].ability.name}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CardType;
