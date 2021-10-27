import React, { useEffect, useState } from 'react'

export default function PokemonInfoComponent(props) {

  const location = props.location//useLocation();
  
  const [state, setstate] = useState({});
  const ComponentInit = () => {
    useEffect(() => {
      let {pokemon} = location.state;
      setstate(pokemon);
    }, []);
  }

  ComponentInit();
  return (
    <div>
      <span>{state.name}</span>
    </div>
  )
}