import './App.css';
import React, { useEffect, useState } from 'react';
import PokeItemComponent from './Components/PokeItem';
import PokemonDataManager from './Utils/PokeDataSetter';

function App() {
  
  const ComponentInit = () => {
    useEffect( async () => {
      await PokemonDataManager.isLoaded();

      let pokemonList = PokemonDataManager.pokemonList;

      setstate(pokemonList);
    }, [])
  }

  const [state, setstate] = useState([]);
  ComponentInit();
  return (
    <div className="App">
      <div className="poke_section">
        {
          state.map((pokemon) => ( <PokeItemComponent pokemon={pokemon}/>))
        }
      </div>
    </div>
  );
}

export default App;
