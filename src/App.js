import './App.css';
import PokeAPI from './Utils/PokeAPI';
import React, { useEffect, useState } from 'react';
import PokeItemComponent from './Components/PokeItem';

function App() {
  
  const ComponentInit = () => {
    useEffect(() => {
      PokeAPI.getPokemonList()
        .then(data => {
          let {results} = data;

          setstate(results);
        })
        .catch(err => {
          console.error(err);
        })
    }, [])
  }

  const [state, setstate] = useState([]);
  ComponentInit();
  return (
    <div className="App">
      <div className="poke_section">
        {
          state.map(({name, url}) => ( <PokeItemComponent name={name} url={url}/>))
        }
      </div>
    </div>
  );
}

export default App;
