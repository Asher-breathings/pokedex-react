import React from 'react'
import { useHistory } from 'react-router';
import { Pokemon, PokeImages } from '../Utils/Pokemon';

export default function PokeItemComponent(props) {

  /**
   * @type {Pokemon}
   */
  const pokemon = props.pokemon;
  const history = useHistory();
  const onClickPokemonItem = () => {
    history.push(`/${pokemon.name}`, pokemon);
  }
  return (
    <div className="pokemon_item" onClick={onClickPokemonItem}>
      <div>
        <div><img src={pokemon.getImage(PokeImages.ImageType.FrontDefault)}/></div>
        <div>{pokemon.name}</div>
      </div>
    </div>
  )
}