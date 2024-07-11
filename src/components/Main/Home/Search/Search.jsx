import React, { useState, useRef, useEffect } from "react";
import axios from 'axios'

const Search = ({ pokeList,addPokemon }) => {
  const [pokemon, setPokemon] = useState('pikachu');
  const [message, setMessage] = useState('Introduce el nombre o ID de un pokemon')
  const [value, setValue] = useState('pikachu');
  const form = useRef();
  const refTime = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
    clearTimeout(refTime.current)
    refTime.current = setTimeout(() => {
      /* const newPokemon = e.target.keyword.value.toLowerCase(); */
      const duplicatePokemon = pokeList.find((pokemon) => pokemon.name.toLowerCase() === value || pokemon.id.toString() === value);
  
      if (duplicatePokemon) {
          setMessage("El pokemon ingresado, ya existe");
      } else {
          form.current.reset();
          setPokemon(value);
      }
        setPokemon(value)
      }, 2000)
  };


  useEffect(() => {
    async function getPokemon() {
      try {
        // Petición HTTP
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const resp = res.data
        addPokemon(resp);
        } catch (e) {
        setMessage("El pokemon ingresado no es válido"); // No pintes nada 
      }
    }
    getPokemon();
  }, [pokemon]);



  return (
    <section className="main">
      <form ref={form} className="form">
        <div>
          <label htmlFor="keyword">Pokemon: </label>
          <input type="text" name="keyword" onChange={handleChange} />
        </div>
        {value.keyword ?
          <button type="submit">Search</button> :
          <i>{message}</i>
        }
      </form>
    </section>
  )
}
export default Search;