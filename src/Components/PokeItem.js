import React from 'react'

export default function PokeItemComponent(props) {


  const {name, url} = props;
  return (
    <div className="pokemon_item">
      <div>
        <div>{name}</div>
        <div>{url}</div>
      </div>
    </div>
  )
}