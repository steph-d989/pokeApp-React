import React from 'react';
import '../PokeCard';

export default function PokeCard({ pokemon: { name, id, sprites, types } }) {
  console.log(name, id, sprites, types);
  let name1 = name;
  name1 = name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase();
  const id1 = id;
  const image1 = sprites.other["official-artwork"].front_default;
  const type1 = types[0].type.name;
  const type2 = types.length > 1 ? types[1].type.name : null;

  const typeClass = `type-${type1}`;

  return (
    <div className={`pokeCard ${typeClass}`}>
      <div className="pokeId">nº{id1}</div>
      <div className="pokeName">{name1}</div>
      <img src={image1} alt={name1} />
      <div className="pokeType">{type1}</div>
      {type2 && <div className="pokeType">{type2}</div>}
    </div>
  );
}