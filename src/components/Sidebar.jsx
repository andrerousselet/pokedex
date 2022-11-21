import { useState, useEffect } from 'react';
import { requestData } from '../services/request';

export default function Sidebar() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const data = await requestData('https://pokeapi.co/api/v2/type');
      setTypes(data.results)
    };
    fetchTypes();
  }, []);

  return (
    <aside className='sidebar'>
      <ul>
        {types?.map((type) => (
          <li
            key={type.url}
          >
            {type.name}
          </li>
        ))}
      </ul>
    </aside>
  )
};
