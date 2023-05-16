import axios from 'axios';
import { fetchPokemon } from './fetchPokemon';

export const fetchPokemonByType = async (type: string, pokemonAmount = 9) => {
  const URL = `https://pokeapi.co/api/v2/type/${type}`;

  const response = await axios.get(URL);
  const data = response.data;

  const promises = data.pokemon
    .filter((item: any, index: number) => index + 1 <= pokemonAmount && item)
    .map(async (item: { pokemon: { name: string; }; }) => {
      const pokemonData = await fetchPokemon(item.pokemon.name);
      return pokemonData.data;
    });

  const pokemonList = await Promise.all(promises);

  return pokemonList;
};