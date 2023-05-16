import { Pokemon } from "../types/Pokemon";
import axios from 'axios';

export const fetchPokemon = async (pokemon: string) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  let response;
  let data: Pokemon;
  let error;

  try {
    response = await axios.get(URL);
    data =  response.data;
    error = false;
  } catch {
    data = null;
    error = true;
  }

  return { response, data, error };
};
