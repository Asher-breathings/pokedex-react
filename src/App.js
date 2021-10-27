import './App.css';
import React, { useEffect, useState } from 'react';
import PokeItemComponent from './Components/PokeItem';
import PokemonDataManager from './Utils/PokeDataSetter';

function App() {
  
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

export default App;
