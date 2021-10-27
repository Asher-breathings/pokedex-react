import React, { useEffect, useState } from 'react';
import PokemonDataManager from '../Utils/PokeDataSetter';
import PokeItemComponent from './PokeItem';

export default function PokemonListComponent(props) {


  const [state, setstate] = useState([]);
  const ComponentInit = () => {
    useEffect( async () => {
      await PokemonDataManager.isLoaded();

      let pokemonList = PokemonDataManager.pokemonList;

      setstate(pokemonList);
    }, [])
  }
  const moreLoadPokemon = async () => {
    await PokemonDataManager.loadPokemon();
    let pokemonList = PokemonDataManager.pokemonList;

    setstate([...pokemonList]);

  }
  ComponentInit();
  
  return (
    <div className="App">
      <div className="poke_section">
        {
          state.map((pokemon) => ( <PokeItemComponent key={pokemon.id} pokemon={pokemon}/>))
        }
      </div>
      <button onClick={() => {moreLoadPokemon()}}>추가</button>
    </div>
  );
}