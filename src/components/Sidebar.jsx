import { useState, useEffect } from 'react';
import { requestData } from '../services/request';
import '../styles/Sidebar.css';

export default function Sidebar({ fetchPokemons, setPokemons, hideLoaderBtn }) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const data = await requestData('https://pokeapi.co/api/v2/type');
      setTypes(data.results)
    };
    fetchTypes();
  }, []);

  const fetchPokemonsByType = async (url) => {
    const data = await requestData(url);
    const pokemonsByType = data.pokemon.map(p => p.pokemon)
    setPokemons(pokemonsByType);
    hideLoaderBtn(true);
  }

  return (
    <aside className='sidebar'>
      <ul className='types-list'>
        <li className='type' onClick={fetchPokemons}>all</li>
        {types?.map((type) => (
          <li
            key={type.url}
            className='type'
            onClick={() => fetchPokemonsByType(type.url)}
          >
            {type.name}
          </li>
        ))}
      </ul>
    </aside>
  )
};
