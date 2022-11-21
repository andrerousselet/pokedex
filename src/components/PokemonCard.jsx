import { useState, useEffect } from 'react';
import { requestData } from '../services/request';

export default function PokemonCard({ url }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await requestData(url);
      setPokemon(data)
    }
    fetchPokemon();
  }, [url])

  return (
    <div className='pokemon-card'>
      <img
        className='pokemon-image'
        src={pokemon.sprites?.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <div className='pokemon-card-bottom'>
        <p className='pokemon-id'>#{pokemon.id}</p>
        <p>{pokemon.name}</p>
      </div>
    </div>
  )
};
