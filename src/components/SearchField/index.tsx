import * as C from "./styles";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import { FC, SyntheticEvent } from "react";
import { fetchPokemon } from "../../api/fetchPokemon";
import { Pokemon } from "../../types/Pokemon";
import { SetterOrUpdater } from "recoil";
import { useRecoilState } from 'recoil';
import { inputState } from "../../atoms/searchBarAtoms";

type SearchFieldProps = {
  setPokemonList: (data: Pokemon[]) => void;
  setError: SetterOrUpdater<boolean>;
  setLoading: SetterOrUpdater<boolean>;
};

export const SearchField:FC<SearchFieldProps> = ({setError,setLoading,setPokemonList}) => {
  const [inputValue, setInputValue] = useRecoilState(inputState);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    setLoading(true);
    const requestPokemon = await fetchPokemon(inputValue.toLowerCase());
    requestPokemon.response
      ? setPokemonList([requestPokemon.data])
      : setError(requestPokemon.error);

    setLoading(false);
    setInputValue("");
  };

  return (
    <C.Container onSubmit={handleSubmit}>
      <C.InputText
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search Pokémon ....."
        required
      />
      <C.SearchButton>
        <SearchIcon />
      </C.SearchButton>
    </C.Container>
  );
};
