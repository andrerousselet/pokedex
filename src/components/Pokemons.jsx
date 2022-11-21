import PokemonCard from "./PokemonCard";

export default function Pokemons({ pokemons }) {
  return (
    <section className='pokemons-list'>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>
          <PokemonCard url={pokemon.url} />
        </div>
      ))}
    </section>
  )
};
