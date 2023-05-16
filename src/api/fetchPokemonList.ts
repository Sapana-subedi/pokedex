import { fetchPokemon } from "./fetchPokemon";
import axios from 'axios';

export const fetchPokemonList = async (page: number) => {
  const offset = 9 * (page - 1);
  const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`;

  const response = await axios.get(URL);
  const data =  response.data;
  
  const promises = data.results.map(async (pokemon: { name: string; }) => {
    const pokemonData = await fetchPokemon(pokemon.name);
    return pokemonData.data;
  });

  const pokemonList = Promise.all(promises);

  return pokemonList;
};
