import React from 'react'
import { Pokemon, PokeImages } from '../Utils/Pokemon';

export default function PokeItemComponent(props) {

  /**
   * @type {Pokemon}
   */
  const pokemon = props.pokemon;
  return (
    <div className="pokemon_item">
      <div>
        <div><img src={pokemon.getImage(PokeImages.ImageType.FrontDefault)}/></div>
        <div>{pokemon.name}</div>
      </div>
    </div>
  )
}