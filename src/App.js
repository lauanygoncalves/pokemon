import React, { useEffect, useState} from 'react';
import './style.css';

function App() {
  const [pokemon, setPokemon] = useState();
  const [name, setName] = useState("");
  
  useEffect(()=> {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(url)
    .then(response => response.json())
    .then(response => {    
      console.log(response); 
      setPokemon(response)
    })
    .catch(err => console.log(err));
  },[name]);

  return (
    <div className='container'>
    <input
          placeholder="Digite um Pokemon"
          value={name}
          onChange={(e) => setName(e.target.value)}
    />
      <div>
        <img src={pokemon?.sprites?.front_default} alt={pokemon?.name}></img>
        <div>Nome: {pokemon?.name}</div>
        <div>Nº: {pokemon?.id}</div>
        <div>Peso: {pokemon?.weight / 10}kg</div>
        <div>Altura: {pokemon?.height / 10}m</div>
      </div>

    </div>
  );
}

export default App;
