import { useState, useEffect } from 'react';
import { requestData } from './services/request'
import Sidebar from './components/Sidebar';
import Pokemons from './components/Pokemons';
import Header from './components/Header';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await requestData('https://pokeapi.co/api/v2/pokemon');
      setNext(data.next);
      setPokemons(data.results)
    }
    fetchPokemons();
  }, []);

  const fetchMorePokemons = async () => {
    const data = await requestData(next);
    setNext(data.next);
    setPokemons([...pokemons, ...data.results]);
  }

  return (
    <>
      <Header />
      <main className='main-content'>
        <Sidebar />
        <section className='pokemons'>
          <Pokemons pokemons={pokemons} />
          <section className='loader-section'>
            <button
              className='load-btn'
              type='button'
              onClick={fetchMorePokemons}
            >
              Load more pokemons...
            </button>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
