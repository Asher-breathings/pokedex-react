import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { PokeImages, Pokemon } from '../Utils/Pokemon';

export default function PokemonInfoComponent(props) {

  const location = useLocation();

  const [state, setstate] = useState({});

  /**
   * @type {Pokemon}
   */
  const pokemon = state;
  const ComponentInit = () => {
    useEffect(() => {
      let pokemon = location.state;
      setstate(pokemon);
    }, []);
  }

  ComponentInit();
  return (
    <div className="pokemon_info_layout">
      {
        pokemon.name ?
          <table>
            <tbody>
              <tr>
                <th rowSpan="4">
                  사진
                </th>
                <td rowSpan="4">
                  <img src={pokemon.getImage(PokeImages.ImageType.FrontDefault)} className="main_photo"/>
                </td>
              </tr>
              <tr>
                <th>개체 명</th>
                <td>{pokemon.name}</td>
              </tr>
              <tr>
                <th>종류</th>
                <td>{pokemon.genus}</td>
              </tr>
              <tr>
                <th>타입</th>
                <td>
                  {
                    pokemon.types.map(type => <span>{type}</span>)
                  }
                </td>
              </tr>
            </tbody>
          </table>
        : <></>
      }
    </div>
  )
}