import React, { useEffect, useState} from 'react';
import './style.css';

function App() {
  const [pokemon, setPokemon] = useState({});
  const [name, setName] = useState("");

  const loadAPI = async() => {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(url)
    .then(response => response.json())
    .then(response => {     
      setPokemon(response)
    })
    .catch(err => console.log(err));
  }

  useEffect(()=> {
    loadAPI();
  },[]);

  return (
    <div className='container'>
      <header>
        <strong>
          Pokemon API
        </strong>
      </header>

      <form>
        <input
          placeholder="Digite um pokemon"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <div>
        <img src={pokemon?.sprites?.front_default} alt={pokemon?.name}></img>
        <div>Nome: {pokemon?.name}</div>
        <div>Nº {pokemon?.id}</div>
        <div>Peso: {pokemon?.weight / 10}kg</div>
        <div>Altura: {pokemon?.height / 10}m</div>
      </div>

    </div>
  );
}

export default App;
